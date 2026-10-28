import { ProjectPage } from '../models/project-page';

export const cc117: ProjectPage = {
  title: 'CC-117',
  subtitle: 'Discord bot for Wynncraft guild management & activity analysis',
  content: [
    {
      type: 'text',
      content: 'CC-117 is a Discord bot originally created for my Wynncraft guild and later made publicly available. It reads data from the public Wynncraft API, storing both raw and processed data for use in commands, activity tracking, and automated role updates.'
    },
    {
      type: 'text',
      content: 'The system is split into two separate programs:'
    },
    {
      type: 'list',
      content: [
        'The bot — handles commands, responds to users, updates roles',
        'The data collector — repeatedly queries the Wynncraft API and updates the database'
      ]
    },
    {
      type: 'text',
      content: 'The first feature implemented was automated role assignment based on guild ranks on Wynncraft.'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/UpdateRoles.png'
    },
    {
      type: 'text',
      content: 'One of the first additional features allowed users to track guilds and monitor average activity. Commands exist to add/remove tracked guilds and list activity results.'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/TrackedGuilds.png'
    },
    {
      type: 'text',
      content: 'To provide more precise insight, a feature was added to graph average online players per hour with sorting and timezone support.'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/ActiveHours.png'
    },
    {
      type: 'text',
      content: 'To help identify inactive members, a command was added to check last login times for players in a guild.'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/LastLogins.png'
    },
    {
      type: 'text',
      content: 'A command was added to list online players within a guild and show which server they are active on.'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/Online.png'
    },
    {
      type: 'text',
      content: 'Additional commands allow users to view stats for guilds and players, including image-generated banners.'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/GuildStats.png'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/PlayerStats.png'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/PlayerBanner.png'
    },
    {
      type: 'text',
      content: 'A novelty feature was added to estimate how likely a player is an alt account ("sus level").'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/Sus.png'
    },
    {
      type: 'text',
      content: 'If multiple guilds or players match a given identifier, the bot will present selection options via buttons.'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/MultipleGuilds.png'
    },
    {
      type: 'text',
      content: 'Additional commands assist guild moderation, configuration, and promotion workflows.'
    },
    {
      type: 'image',
      content: '/Resources/CC-117/ViewConfig.png'
    },
    {
      type: 'text',
      content: 'The bot was originally written in Python, but migrated to Java due to hosting limitations for slash commands. Afterward, it was rewritten in JavaScript and migrated to SQLite for improved structure, performance, and extensibility.'
    },
    {
      type: 'text',
      content: 'Eventually, long-standing issues led to a major overhaul, including redesigned responses using embeds rather than plain text blocks.'
    }
  ],
  repositories: [
    {
      name: 'Current JavaScript bot',
      url: 'https://github.com/ShadowCat117/CC-117'
    },
    {
      name: 'Original Java version',
      url: 'https://github.com/ShadowCat117/CC-117-legacy-'
    }
  ]
};
