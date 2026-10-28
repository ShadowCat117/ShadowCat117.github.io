import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../../section-header/section-header';
import { wynntilsContributions } from './wynntils';

@Component({
  selector: 'app-wynntils-page',
  imports: [SectionHeader],
  templateUrl: './wynntils-page.html',
  styleUrl: './wynntils-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WynntilsPage {
  readonly contributions = wynntilsContributions;

  readonly githubLinks = [
    {
      name: 'Features & New Additions',
      url: 'https://github.com/Wynntils/Wynntils/pulls?q=is%3Apr+is%3Amerged+author%3AShadowCat117+feat+in%3Atitle',
    },
    {
      name: 'Bug Fixes',
      url: 'https://github.com/Wynntils/Wynntils/pulls?q=is%3Apr+is%3Amerged+author%3AShadowCat117+fix+in%3Atitle',
    },
    {
      name: 'Refactors',
      url: 'https://github.com/Wynntils/Wynntils/pulls?q=is%3Apr+is%3Amerged+author%3AShadowCat117+refactor+in%3Atitle',
    },
    {
      name: 'Misc. Chores',
      url: 'https://github.com/Wynntils/Wynntils/pulls?q=is%3Apr+is%3Amerged+author%3AShadowCat117+chore+in%3Atitle',
    },
    {
      name: 'Open PRs',
      url: 'https://github.com/Wynntils/Wynntils/pulls/ShadowCat117',
    },
  ];
}
