export interface WynntilsContribution {
  title: string;
  description: string[];
  prs: {
    name: string;
    url: string;
  }[];
  media?: ({ type: 'image'; src: string; alt: string } | { type: 'video'; src: string })[];
}
