export type ProjectContent =
  | {
  type: 'text';
  content: string;
}
  | {
  type: 'image';
  content: string;
}
  | {
  type: 'list';
  content: string[];
};
