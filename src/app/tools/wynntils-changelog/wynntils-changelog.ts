import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LinesEditor } from './lines-editor';
import {
  ChangelogDraft,
  Feature,
  FeatureChange,
  Profile,
  PROFILE_NAMES,
  newArgument,
  newCategory,
  newChange,
  newCommand,
  newDraft,
  newFeature,
  newFunction,
  newTextItem,
} from './changelog';
import { generateChangelog } from './generate-changelog';

@Component({
  selector: 'app-wynntils-changelog',
  imports: [FormsModule, LinesEditor],
  templateUrl: './wynntils-changelog.html',
  styleUrl: './wynntils-changelog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WynntilsChangelog {
  readonly draft = signal<ChangelogDraft>(newDraft());
  readonly markdown = computed(() => generateChangelog(this.draft()));
  readonly profiles = PROFILE_NAMES;
  readonly copyStatus = signal('');
  readonly preview = viewChild<ElementRef<HTMLTextAreaElement>>('preview');
  readonly createFeature = newFeature;
  readonly createChange = newChange;
  readonly createCommand = newCommand;
  readonly createCategory = newCategory;
  readonly createFunction = newFunction;
  readonly createArgument = newArgument;
  readonly createNote = newTextItem;

  setField<T, K extends keyof T>(target: T, key: K, value: T[K]): void {
    target[key] = value;
    this.changed();
  }
  append<T>(items: T[], value: T): void {
    items.push(value);
    this.changed();
  }
  remove<T>(items: T[], index: number): void {
    items.splice(index, 1);
    this.changed();
  }
  move<T>(items: T[], index: number, offset: number): void {
    const destination = index + offset;
    if (destination < 0 || destination >= items.length) return;
    [items[index], items[destination]] = [items[destination], items[index]];
    this.changed();
  }
  toggleProfile(feature: Feature, profile: Profile, enabled: boolean): void {
    feature.profiles = enabled
      ? [...new Set([...feature.profiles, profile])]
      : feature.profiles.filter((value) => value !== profile);
    this.changed();
  }
  allProfiles(feature: Feature): boolean {
    return this.profiles.every((profile) => feature.profiles.includes(profile));
  }
  toggleAllProfiles(feature: Feature, enabled: boolean): void {
    feature.profiles = enabled ? [...this.profiles] : [];
    this.changed();
  }
  setChangeKind(change: FeatureChange, kind: FeatureChange['kind']): void {
    this.setField(change, 'kind', kind);
  }
  async copyMarkdown(): Promise<void> {
    if (!this.markdown()) return;
    try {
      await navigator.clipboard.writeText(this.markdown());
      this.copyStatus.set('Markdown copied.');
    } catch {
      const preview = this.preview()?.nativeElement;
      preview?.focus();
      preview?.select();
      this.copyStatus.set(
        'Clipboard access failed. The Markdown is selected below; copy it manually.',
      );
    }
  }
  private changed(): void {
    this.draft.update((draft) => ({ ...draft }));
    this.copyStatus.set('');
  }
}
