import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { WynntilsChangelog } from './wynntils-changelog';
import { newFeature, newLine, newTextItem } from './changelog';

describe('Wynntils changelog editor', () => {
  let fixture: ComponentFixture<WynntilsChangelog>;
  let component: WynntilsChangelog;
  let element: HTMLElement;
  const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [WynntilsChangelog] }).compileComponents();
    fixture = TestBed.createComponent(WynntilsChangelog);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  afterEach(() => {
    if (originalClipboard) Object.defineProperty(navigator, 'clipboard', originalClipboard);
    else Reflect.deleteProperty(navigator, 'clipboard');
  });

  const button = (element: HTMLElement, text: string): HTMLButtonElement => {
    const found = [...element.querySelectorAll('button')].find(
      (button) => button.textContent?.trim() === text,
    );
    if (!found) throw new Error('Button not found: ' + text);
    return found;
  };

  async function enter(selector: string, value: string): Promise<void> {
    const input = element.querySelector<HTMLInputElement>(selector)!;
    expect(input).toBeTruthy();
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();
  }

  it('updates the preview while typing and removes a cleared update line', async () => {
    const preview = element.querySelector<HTMLTextAreaElement>('.markdown')!;
    expect(button(element, 'Copy Markdown').disabled).toBe(true);
    await enter('input[placeholder="1.21.11"]', '1.21.11');
    expect(preview.value).toBe('Updated to Minecraft 1.21.11');
    expect(button(element, 'Copy Markdown').disabled).toBe(false);
    await enter('input[placeholder="1.21.11"]', '');
    expect(preview.value).toBe('');
  });

  it('adds a new feature and makes all-profile selection exclude Blank Slate', async () => {
    button(element, '+ Add feature or overlay').click();
    await fixture.whenStable();
    await enter('input[placeholder="Player Ping"]', 'Player Ping');
    const newFeatureCheckbox = element.querySelector<HTMLInputElement>(
      '#features-title ~ details input[type="checkbox"]',
    )!;
    newFeatureCheckbox.click();
    await fixture.whenStable();
    expect(component.markdown()).toContain('disabled by default in all profiles');
    const allProfilesCheckbox = element.querySelector<HTMLInputElement>(
      'fieldset input[type="checkbox"]',
    )!;
    allProfilesCheckbox.click();
    await fixture.whenStable();
    expect(component.draft().features[0].profiles).toEqual([
      'Default',
      'New Player',
      'Lite',
      'Minimal',
    ]);
    expect(component.markdown()).toContain(
      'enabled for default, new player, lite and minimal profiles',
    );
    expect(element.querySelector('fieldset')?.textContent).toContain(
      'Blank Slate is always excluded',
    );
    allProfilesCheckbox.click();
    await fixture.whenStable();
    expect(component.markdown()).toContain('disabled by default in all profiles');
  });

  it('adds and removes fix notes through the reusable editor', async () => {
    const fixes = element.querySelector<HTMLElement>('section[aria-labelledby="fixes-title"]')!;
    button(fixes, '+ Add fix').click();
    await fixture.whenStable();
    const input = fixes.querySelector<HTMLTextAreaElement>('textarea')!;
    input.value = 'Fixed rendering';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();
    button(fixes, '+ Add indented note').click();
    await fixture.whenStable();
    const note = fixes.querySelector<HTMLInputElement>('input')!;
    note.value = 'Including Vulkan';
    note.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();
    expect(component.markdown()).toBe('Fixes\n- Fixed rendering\n  - Including Vulkan');
    button(fixes, 'Remove').click();
    await fixture.whenStable();
    expect(component.markdown()).toBe('');
  });

  it('reorders and removes sections without leaving stale Markdown', () => {
    const first = { ...newFeature(), name: 'First', isNew: true };
    const second = { ...newFeature(), name: 'Second', isNew: true };
    component.append(component.draft().features, first);
    component.append(component.draft().features, second);
    component.move(component.draft().features, 1, -1);
    expect(component.markdown().startsWith('Second')).toBe(true);
    component.remove(component.draft().features, 0);
    expect(component.markdown()).not.toContain('Second');
    expect(component.markdown().startsWith('First')).toBe(true);
  });

  it('copies exactly the previewed Markdown and clears feedback after editing', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    component.setField(component.draft(), 'fixes', [
      { ...newLine(), text: 'Fixed rendering', notes: [{ ...newTextItem(), text: 'Details' }] },
    ]);
    await component.copyMarkdown();
    expect(writeText).toHaveBeenCalledWith('Fixes\n- Fixed rendering\n  - Details');
    expect(component.copyStatus()).toBe('Markdown copied.');
    component.setField(component.draft(), 'minecraft', '1.21.11');
    expect(component.copyStatus()).toBe('');
  });

  it('selects Markdown for manual copying if clipboard access is rejected', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error('Denied')) },
    });
    component.setField(component.draft(), 'minecraft', '1.21.11');
    await fixture.whenStable();
    await component.copyMarkdown();
    const preview = element.querySelector<HTMLTextAreaElement>('.markdown')!;
    expect(component.copyStatus()).toContain('copy it manually');
    expect(preview.selectionStart).toBe(0);
    expect(preview.selectionEnd).toBe(preview.value.length);
  });
});
