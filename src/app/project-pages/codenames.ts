import { ProjectPage } from '../models/project-page';

export const codenames: ProjectPage = {
  title: 'Accessible Codenames',
  subtitle: 'Android adaptation of the board game Codenames with accessibility features',
  content: [
    {
      type: 'text',
      content: 'This was my final year project for my Software Engineering degree at Swansea University. I recreated the board game Codenames as an Android application with a strong focus on accessibility, including text-to-speech support and fully customizable colours.'
    },
    {
      type: 'image',
      content: '/Resources/Codenames/Codenames.jpg'
    },
    {
      type: 'text',
      content: 'Codenames is played with two teams, each containing at least two players. One player from each team becomes the spymaster while everyone else guesses based on hints provided.'
    },
    {
      type: 'image',
      content: '/Resources/Codenames/CodenamesTeamSetup.jpg'
    },
    {
      type: 'text',
      content: 'The game board contains 25 unique words assigned to four categories: Team A, Team B, neutral, and the bomb word. Spymasters provide a word and number as a hint to guide their team toward selecting linked words while avoiding opposing or bomb words.'
    },
    {
      type: 'image',
      content: '/Resources/Codenames/CodenamesGuess.jpg'
    },
    {
      type: 'text',
      content: 'The app includes multiple playstyles: local pass-and-play or online multiplayer. Online play includes chat support, while local play allows assigning real players to teams for easier memory.'
    },
    {
      type: 'image',
      content: '/Resources/Codenames/CodenamesOnline.jpg'
    },
    {
      type: 'text',
      content: 'Accessibility features include Text-to-Speech via long-pressing UI elements, and fully customizable colour settings across eight interface categories:'
    },
    {
      type: 'list',
      content: [
        'Team A',
        'Team B',
        'Bomb Square',
        'Neutral Square',
        'Unmodified Square',
        'Application Background',
        'Menu Buttons',
        'Menu Text'
      ]
    },
    {
      type: 'image',
      content: '/Resources/Codenames/CodenamesColours.jpg'
    },
    {
      type: 'text',
      content: 'Users can save up to three colour configuration presets. Designs were created in XML layouts via Android Studio, with navigation and logic written in Kotlin.'
    },
    {
      type: 'text',
      content: 'Online connectivity is powered by a custom Node.js server. While self-taught, the implementation successfully handles real-time communication for gameplay and chat.'
    }
  ],
  repositories: [
    {
      name: 'Android App Repository',
      url: 'https://github.com/ShadowCat117/AccessibleCodenames'
    },
    {
      name: 'Server Repository',
      url: 'https://github.com/ShadowCat117/AccessibleCodenamesServer'
    }
  ],
  pdf: {
    title: 'Dissertation',
    link: '/Resources/PDFs/Dissertation.pdf'
  }
};
