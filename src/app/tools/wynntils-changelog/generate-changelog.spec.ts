import { describe, expect, it } from 'vitest';
import {
  newArgument,
  newCategory,
  newChange,
  newCommand,
  newDraft,
  newFeature,
  newFunction,
  newLine,
  newTextItem,
  PROFILE_NAMES,
} from './changelog';
import { generateChangelog } from './generate-changelog';

const line = (text: string, notes: string[] = []) => ({
  ...newLine(),
  text,
  notes: notes.map((text) => ({ ...newTextItem(), text })),
});
const change = (text: string, notes: string[] = []) => ({ ...newChange(), ...line(text, notes) });

describe('Wynntils Markdown generation', () => {
  it('omits blank versions, unfinished sections, and orphaned notes', () => {
    const draft = newDraft();
    draft.minecraft = '  ';
    draft.features.push({ ...newFeature(), name: 'Unchanged' }, { ...newFeature(), isNew: true });
    draft.commands.push({ ...newCommand(), name: 'Ping' });
    draft.categories.push({ ...newCategory(), name: 'Combat', functions: [newFunction()] });
    draft.fixes.push(line(' ', ['No parent']));
    expect(generateChangelog(draft)).toBe('');
  });

  it('formats optional update lines and opening notes exactly like the examples', () => {
    const draft = newDraft();
    Object.assign(draft, { minecraft: ' 1.21.11 ', fabric: '0.18.4', neoforge: '21.11.23-beta' });
    draft.notes = [
      line('Categorised keybinds by their respective features category'),
      line(''),
      line('Another note'),
    ];
    expect(generateChangelog(draft)).toBe(
      [
        'Updated to Minecraft 1.21.11',
        '(Fabric only) Updated required Fabric version to 0.18.4',
        '(NeoForge only) Updated required NeoForge version to 21.11.23-beta',
        'Categorised keybinds by their respective features category',
        'Another note',
      ].join('\n\n'),
    );
    draft.fabric = '';
    expect(generateChangelog(draft)).not.toContain('(Fabric only)');
  });

  it('reproduces the Player Ping feature and config style from the examples', () => {
    const draft = newDraft();
    draft.features = [
      {
        ...newFeature(),
        name: 'Player Ping',
        isNew: true,
        description: 'displays ping markers from other Hades users in your current party',
        profiles: ['Lite', 'Default'],
        changes: [
          change('There are 6 ping options, each have a unique icon', [
            'Options are: Focus, Need Help, Wait Here, Attack Here, Look Here and Group Up',
          ]),
          {
            ...newChange(),
            kind: 'config',
            name: 'Marker Scale',
            description: 'how big to render the markers',
            defaultValue: '1',
          },
        ],
      },
    ];
    expect(generateChangelog(draft)).toBe(
      [
        'Player Ping',
        '- New feature, displays ping markers from other Hades users in your current party, enabled for default and lite profiles',
        '- There are 6 ping options, each have a unique icon',
        '  - Options are: Focus, Need Help, Wait Here, Attack Here, Look Here and Group Up',
        '- Marker Scale config, how big to render the markers, default 1',
      ].join('\n'),
    );
  });

  it('supports all four profiles, individual profiles, and disabled defaults', () => {
    const draft = newDraft();
    const feature = { ...newFeature(), name: 'Example', isNew: true };
    draft.features.push(feature);
    expect(generateChangelog(draft)).toContain('New feature, disabled by default in all profiles');
    feature.profiles = [...PROFILE_NAMES];
    expect(generateChangelog(draft)).toContain(
      'enabled for default, new player, lite and minimal profiles',
    );
    expect(generateChangelog(draft)).not.toContain('blank slate');
    feature.profiles = ['New Player'];
    expect(generateChangelog(draft)).toContain('enabled for new player profile');
  });

  it('templates added and removed configs with nested notes and optional defaults', () => {
    const draft = newDraft();
    draft.features = [
      {
        ...newFeature(),
        name: 'Coordinates Overlay',
        changes: [
          change('Now replicates the vanilla coordinates', [
            'The previous overlay style can be recreated with functions',
          ]),
          {
            ...newChange(),
            kind: 'config',
            name: 'Replace Direction',
            description: 'replaces the cardinal direction with your Y coordinate',
            defaultValue: 'disabled',
          },
          {
            ...newChange(),
            kind: 'removed-config',
            name: 'Colored',
            notes: [{ ...newTextItem(), text: 'No longer needed' }],
          },
          {
            ...newChange(),
            kind: 'config',
            name: 'Compass Style',
            description: 'changes the compass style',
          },
        ],
      },
    ];
    expect(generateChangelog(draft)).toBe(
      [
        'Coordinates Overlay',
        '- Now replicates the vanilla coordinates',
        '  - The previous overlay style can be recreated with functions',
        '- New config Replace Direction, replaces the cardinal direction with your Y coordinate, default disabled',
        '- Removed Colored config',
        '  - No longer needed',
        '- New config Compass Style, changes the compass style',
      ].join('\n'),
    );
  });

  it('formats commands, statistics, function aliases, types, arguments, and fixes in order', () => {
    const tick = String.fromCharCode(96);
    const quoted = (value: string) => tick + value + tick;
    const draft = newDraft();
    draft.commands = [
      {
        ...newCommand(),
        name: 'Ping Command',
        lines: [line('New command to ignore pings'), line(quoted('/ping ignore clear'))],
      },
    ];
    draft.statistics = [line('Added time trial statistics')];
    draft.categories = [
      {
        ...newCategory(),
        name: 'World Functions',
        functions: [
          {
            ...newFunction(),
            name: 'totem_seconds_left',
            aliases: 'totem_time, totem_time, totem_seconds_left',
            description: 'the time left in seconds',
            returnType: 'Integer',
            arguments: [
              {
                ...newArgument(),
                name: 'totemNumber',
                type: 'Integer',
                description: 'the number of the totem',
              },
            ],
            notes: [{ ...newTextItem(), text: 'The alias uses the same arguments' }],
          },
        ],
      },
    ];
    draft.closingNotes = [line('Thanks to everyone who tested this release.')];
    draft.fixes = [line('Fixed trade market undercutting', ['Values stay non-negative'])];
    expect(generateChangelog(draft)).toBe(
      [
        'Ping Command\n- New command to ignore pings\n- ' + quoted('/ping ignore clear'),
        'Statistics\n- Added time trial statistics',
        'Functions\n- World Functions\n  - ' +
          quoted('totem_seconds_left') +
          ' or ' +
          quoted('totem_time') +
          ' returns the time left in seconds\n    - Return type: ' +
          quoted('Integer') +
          '\n    - ' +
          quoted('totemNumber') +
          ' required Integer argument, the number of the totem\n    - The alias uses the same arguments',
        'Thanks to everyone who tested this release.',
        'Fixes\n- Fixed trade market undercutting\n  - Values stay non-negative',
      ].join('\n\n'),
    );
  });

  it('keeps multiline bullet text indented and preserves user-authored Markdown', () => {
    const draft = newDraft();
    draft.fixes = [line('Fixed **rendering**\nwhen using Vulkan', ['Details\ncontinued'])];
    expect(generateChangelog(draft)).toBe(
      'Fixes\n- Fixed **rendering**\n  when using Vulkan\n  - Details\n    continued',
    );
  });
});
