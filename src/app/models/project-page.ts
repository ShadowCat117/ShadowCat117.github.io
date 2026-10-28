import { ProjectContent } from './project-content';

export interface ProjectPage {
  title: string;
  subtitle: string;
  content: ProjectContent[];
  repositories?: {
    name: string;
    url: string;
  }[];
  pdf?: {
    title: string;
    link: string;
  };
}
