import { Routes } from '@angular/router';
import { WynntilsPage } from './project-pages/wynntils/wynntils-page';
import { ProjectPageComponent } from './project-page-component/project-page-component';
import { Home } from './home/home';
import { Cv } from './cv/cv';
import { mazeBounce } from './project-pages/maze-bounce';
import { cc117 } from './project-pages/cc-117';
import { codenames } from './project-pages/codenames';
import { mythChase } from './project-pages/myth-chase';
import {removeHud} from './project-pages/remove-hud';

export const routes: Routes = [
  {
    path: 'tools/wynntils-changelog',
    loadComponent: () => import('./tools/wynntils-changelog/wynntils-changelog').then(module => module.WynntilsChangelog),
    data: {
      title: 'Wynntils Changelog Generator',
      subtitle: 'Template your release notes, preview the Markdown, and copy it when ready',
    },
  },
  {
    path: 'projects/wynntils',
    component: WynntilsPage,
    data: {
      title: 'Wynntils',
      subtitle: 'Open-source Wynncraft client mod supporting Fabric & NeoForge',
    },
  },
  {
    path: '',
    component: Home,
    data: {
      title: 'James Callan',
      subtitle: 'Software Developer • Minecraft Modding • Game Development',
    },
  },
  {
    path: 'cv',
    component: Cv,
    data: {
      title: 'Curriculum Vitae',
      subtitle: 'Latest version of my professional CV',
    },
  },
  {
    path: 'projects/maze-bounce',
    component: ProjectPageComponent,
    data: {
      title: mazeBounce.title,
      subtitle: mazeBounce.subtitle,
      project: mazeBounce
    }
  },
  {
    path: 'projects/cc-117',
    component: ProjectPageComponent,
    data: {
      title: cc117.title,
      subtitle: cc117.subtitle,
      project: cc117
    }
  },
  {
    path: 'projects/codenames',
    component: ProjectPageComponent,
    data: {
      title: codenames.title,
      subtitle: codenames.subtitle,
      project: codenames
    }
  },
  {
    path: 'projects/myth-chase',
    component: ProjectPageComponent,
    data: {
      title: mythChase.title,
      subtitle: mythChase.subtitle,
      project: mythChase
    }
  },
  {
    path: 'projects/remove-hud',
    component: ProjectPageComponent,
    data: {
      title: removeHud.title,
      subtitle: removeHud.subtitle,
      project: removeHud
    }
  },
];
