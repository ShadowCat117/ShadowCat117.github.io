export const PROFILE_NAMES = ['Default', 'New Player', 'Lite', 'Minimal'] as const;
export type Profile = (typeof PROFILE_NAMES)[number];

export interface TextItem {
  id: number;
  text: string;
}
export interface ChangelogLine extends TextItem {
  notes: TextItem[];
}
export interface FeatureChange extends ChangelogLine {
  kind: 'text' | 'config' | 'removed-config';
  name: string;
  description: string;
  defaultValue: string;
}
export interface Feature {
  id: number;
  name: string;
  isNew: boolean;
  description: string;
  profiles: Profile[];
  changes: FeatureChange[];
}
export interface Command {
  id: number;
  name: string;
  lines: ChangelogLine[];
}
export interface FunctionArgument {
  id: number;
  name: string;
  type: string;
  required: boolean;
  description: string;
}
export interface ChangelogFunction {
  id: number;
  name: string;
  aliases: string;
  description: string;
  returnType: string;
  arguments: FunctionArgument[];
  notes: TextItem[];
}
export interface FunctionCategory {
  id: number;
  name: string;
  functions: ChangelogFunction[];
}
export interface ChangelogDraft {
  minecraft: string;
  fabric: string;
  neoforge: string;
  notes: ChangelogLine[];
  features: Feature[];
  commands: Command[];
  statistics: ChangelogLine[];
  categories: FunctionCategory[];
  closingNotes: ChangelogLine[];
  fixes: ChangelogLine[];
}

let nextId = 0;
export const newTextItem = (): TextItem => ({ id: ++nextId, text: '' });
export const newLine = (): ChangelogLine => ({ ...newTextItem(), notes: [] });
export const newChange = (): FeatureChange => ({
  ...newLine(),
  kind: 'text',
  name: '',
  description: '',
  defaultValue: '',
});
export const newFeature = (): Feature => ({
  id: ++nextId,
  name: '',
  isNew: false,
  description: '',
  profiles: [],
  changes: [],
});
export const newCommand = (): Command => ({ id: ++nextId, name: '', lines: [] });
export const newFunction = (): ChangelogFunction => ({
  id: ++nextId,
  name: '',
  aliases: '',
  description: '',
  returnType: '',
  arguments: [],
  notes: [],
});
export const newArgument = (): FunctionArgument => ({
  id: ++nextId,
  name: '',
  type: '',
  required: true,
  description: '',
});
export const newCategory = (): FunctionCategory => ({ id: ++nextId, name: '', functions: [] });
export const newDraft = (): ChangelogDraft => ({
  minecraft: '',
  fabric: '',
  neoforge: '',
  notes: [],
  features: [],
  commands: [],
  statistics: [],
  categories: [],
  closingNotes: [],
  fixes: [],
});
