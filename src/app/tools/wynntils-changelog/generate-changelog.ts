import { ChangelogDraft, ChangelogLine, Feature, PROFILE_NAMES } from './changelog';

const clean = (text: string): string => text.trim();
const code = (text: string): string =>
  String.fromCharCode(96) + clean(text) + String.fromCharCode(96);
const joinList = (items: string[]): string =>
  items.length < 2 ? items.join('') : items.slice(0, -1).join(', ') + ' and ' + items.at(-1);

function bullet(text: string, depth = 0): string {
  const indent = '  '.repeat(depth);
  return indent + '- ' + clean(text).replace(/\r?\n/g, '\n' + indent + '  ');
}

function withNotes(text: string, notes: { text: string }[], depth = 0): string {
  if (!clean(text)) return '';
  return [
    bullet(text, depth),
    ...notes.filter((note) => clean(note.text)).map((note) => bullet(note.text, depth + 1)),
  ].join('\n');
}

function lines(items: ChangelogLine[], depth = 0): string[] {
  return items.map((item) => withNotes(item.text, item.notes, depth)).filter(Boolean);
}

function featureLines(feature: Feature): string[] {
  const output: string[] = [];
  if (feature.isNew) {
    const selected = PROFILE_NAMES.filter((profile) => feature.profiles.includes(profile));
    const enabled = selected.length
      ? 'enabled for ' +
        joinList(selected.map((profile) => profile.toLowerCase())) +
        (selected.length === 1 ? ' profile' : ' profiles')
      : 'disabled by default in all profiles';
    output.push(
      bullet(['New feature', clean(feature.description), enabled].filter(Boolean).join(', ')),
    );
  }
  for (const change of feature.changes) {
    let text = clean(change.text);
    if (change.kind === 'config') {
      if (!clean(change.name)) continue;
      text = [
        feature.isNew ? clean(change.name) + ' config' : 'New config ' + clean(change.name),
        clean(change.description),
        clean(change.defaultValue) ? 'default ' + clean(change.defaultValue) : '',
      ]
        .filter(Boolean)
        .join(', ');
    } else if (change.kind === 'removed-config') {
      text = clean(change.name) ? 'Removed ' + clean(change.name) + ' config' : '';
    }
    const rendered = withNotes(text, change.notes);
    if (rendered) output.push(rendered);
  }
  return output;
}

function suffixed(name: string, suffix: string): string {
  const value = clean(name);
  return value.toLowerCase().endsWith(suffix.toLowerCase()) ? value : value + ' ' + suffix;
}

export function generateChangelog(draft: ChangelogDraft): string {
  const sections: string[] = [];
  const addSection = (title: string, content: string[]) => {
    if (clean(title) && content.length) sections.push(clean(title) + '\n' + content.join('\n'));
  };

  if (clean(draft.minecraft)) sections.push('Updated to Minecraft ' + clean(draft.minecraft));
  if (clean(draft.fabric))
    sections.push('(Fabric only) Updated required Fabric version to ' + clean(draft.fabric));
  if (clean(draft.neoforge))
    sections.push('(NeoForge only) Updated required NeoForge version to ' + clean(draft.neoforge));
  sections.push(...draft.notes.map((note) => clean(note.text)).filter(Boolean));

  for (const feature of draft.features) addSection(feature.name, featureLines(feature));
  for (const command of draft.commands) {
    if (clean(command.name)) addSection(suffixed(command.name, 'Command'), lines(command.lines));
  }
  addSection('Statistics', lines(draft.statistics));

  const categories: string[] = [];
  for (const category of draft.categories) {
    if (!clean(category.name)) continue;
    const functions: string[] = [];
    for (const entry of category.functions) {
      if (!clean(entry.name)) continue;
      const names = [
        ...new Set([clean(entry.name), ...entry.aliases.split(/[,\n]/).map(clean).filter(Boolean)]),
      ];
      let text = names.map(code).join(' or ');
      if (clean(entry.description)) text += ' returns ' + clean(entry.description);
      const details = [
        ...(clean(entry.returnType) ? [{ text: 'Return type: ' + code(entry.returnType) }] : []),
        ...entry.arguments
          .filter((argument) => clean(argument.name))
          .map((argument) => ({
            text: [
              code(argument.name),
              argument.required ? 'required' : 'optional',
              clean(argument.type),
              'argument' + (clean(argument.description) ? ', ' + clean(argument.description) : ''),
            ]
              .filter(Boolean)
              .join(' '),
          })),
        ...entry.notes,
      ];
      functions.push(withNotes(text, details, 1));
    }
    if (functions.length)
      categories.push(bullet(suffixed(category.name, 'Functions')) + '\n' + functions.join('\n'));
  }
  addSection('Functions', categories);
  sections.push(...draft.closingNotes.map((note) => clean(note.text)).filter(Boolean));
  addSection('Fixes', lines(draft.fixes));
  return sections.join('\n\n');
}
