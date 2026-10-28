import { ProjectPage } from '../models/project-page';

export const mazeBounce: ProjectPage = {
  title: 'Maze Bounce',
  subtitle: 'Unity mobile puzzle game featuring procedural maze-based gameplay',
  content: [
    {
      type: 'text',
      content: 'Maze Bounce is a mobile game built in Unity involving players placing corners in randomly-generated mazes of different sizes to launch a ball through the maze and reach the end.'
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounce.png'
    },
    {
      type: 'text',
      content: 'The game contains 10,000 randomly generated levels for each of 6 difficulties, ranging from 11×11 (beginner) to 19×19 (insane). Mazes are seed-generated, ensuring consistency across devices.'
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounceLevels.png'
    },
    {
      type: 'text',
      content: 'A daily maze exists at 21×21 size, shared across all players and resetting at midnight UTC.'
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounceDaily.png'
    },
    {
      type: 'text',
      content: 'The game features over 4,000 cosmetic combinations using shader-based patterns applied to the ball, walls, background, and corner pieces. Colours and animations can be mixed dynamically.'
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounceCustomisation.png'
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounceCustomised.png'
    },
    {
      type: 'text',
      content: 'The game also includes achievements via Google Play Games, based on progression and unlock milestones.'
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounceAchievements.png'
    },
    {
      type: 'text',
      content: 'Various supporting systems were implemented including:'
    },
    {
      type: 'list',
      content: [
        'Unity IAP (in-app purchases)',
        'Unity Cloud Save (persist progress across devices)',
        'Google AdMob (rewarded + interstitial ads)'
      ]
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounceShop.png'
    },
    {
      type: 'text',
      content: 'The game supports 10 languages: English, Spanish, French, German, Italian, Portuguese (Brazilian), Russian, Simplified Chinese, Japanese, and Korean.'
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounceLanguage.png'
    },
    {
      type: 'text',
      content: 'Early translations were machine-generated using DeepL, with plans to replace them with human translations if development continued.'
    },
    {
      type: 'text',
      content: 'Finally, a preview of gameplay:'
    },
    {
      type: 'image',
      content: '/Resources/MazeBounce/MazeBounce.gif'
    },
    {
      type: 'text',
      content: 'Originally released on the Google Play Store, Maze Bounce is no longer available for download.'
    },
    {
      type: 'text',
      content: 'The GitHub repository for this project is private.'
    }
  ]
};
