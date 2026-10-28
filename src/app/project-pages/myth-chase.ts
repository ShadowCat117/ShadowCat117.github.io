import { ProjectPage } from '../models/project-page';

export const mythChase: ProjectPage = {
  title: 'Myth Chase',
  subtitle: 'Unity-built Pac-Man style university coursework project',
  content: [
    {
      type: 'text',
      content: 'Myth Chase was developed as coursework for the university module Introduction to Video Games Programming. The game is inspired by Pac-Man but features custom levels, characters, and expanded mechanics implemented in Unity.'
    },
    {
      type: 'image',
      content: '/Resources/MythChase/MythChase.jpg'
    },
    {
      type: 'text',
      content: 'The game opens to a keyboard-controlled main menu where players can start the game, view achievements, check leaderboards, or exit.'
    },
    {
      type: 'text',
      content: 'Leaderboards are level-specific and store the highest submitted score per player name, replacing previous entries from the same name.'
    },
    {
      type: 'image',
      content: '/Resources/MythChase/MythChaseLeaderboard.jpg'
    },
    {
      type: 'text',
      content: 'Achievements function globally and track progress continually even after completion.'
    },
    {
      type: 'image',
      content: '/Resources/MythChase/MythChaseAchievements.jpg'
    },
    {
      type: 'text',
      content: 'The game includes five playable characters each with a unique ability, and three levels with different maze layouts and gameplay patterns.'
    },
    {
      type: 'image',
      content: '/Resources/MythChase/MythChaseCharacters.jpg'
    },
    {
      type: 'text',
      content: 'Development began by reviewing existing Unity Pac-Man implementations as references. Movement, level layout, and behaviour were built first and then refined following peer review.'
    },
    {
      type: 'text',
      content: 'The game is written in C# and incorporates standard architectural principles such as the component and observer patterns.'
    },
    {
      type: 'text',
      content: 'The source code is available on GitHub.'
    }
  ],
  repositories: [
    {
      name: 'Myth Chase Repository',
      url: 'https://github.com/ShadowCat117/MythChase'
    }
  ]
};
