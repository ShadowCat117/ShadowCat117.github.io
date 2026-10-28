import { WynntilsContribution } from '../../models/wynntils-contribution';

export const wynntilsContributions: WynntilsContribution[] = [
  {
    title: 'Waypoint Manager',
    description: [
      'The waypoint manager was the very first contribution I made to Wynntils...',
      'Originally missing import, export, and icon filtering—these were later added and the entire GUI was redesigned to include searching, sorting, mass selection, scrollable lists, and filters.',
    ],
    prs: [
      {
        name: 'Original port',
        url: 'https://github.com/Wynntils/Wynntils/pull/1382',
      },
      {
        name: 'Export button',
        url: 'https://github.com/Wynntils/Wynntils/pull/1903',
      },
      {
        name: 'Redesign',
        url: 'https://github.com/Wynntils/Wynntils/pull/2154',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/Resources/Wynntils/WaypointManagerRedesign.mp4',
      },
    ],
  },
  {
    title: 'Custom Seaskipper Screen',
    description: [
      'Replaced the base container UI with a custom map interface, clickable destinations, and later merged with a “departure board” variant. Scrollable and supports new destinations.',
    ],
    prs: [
      {
        name: 'Original port',
        url: 'https://github.com/Wynntils/Wynntils/pull/1473',
      },
      {
        name: 'Departure board version',
        url: 'https://github.com/Wynntils/Wynntils/pull/1545',
      },
      {
        name: 'Redesign',
        url: 'https://github.com/Wynntils/Wynntils/pull/2364',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/Resources/Wynntils/CustomSeaskipperScreen.mp4',
      },
    ],
  },
  {
    title: 'Bank Quick Jumps \u0026 Custom Names',
    description: [
      'Added custom quick-jump navigation for banks, bookshelf banks, misc bucket banks, and block banks. Later updated to support Wynncraft 2.1 redesign and merged UI elements into a single widget.',
    ],
    prs: [
      {
        name: 'Original port',
        url: 'https://github.com/Wynntils/Wynntils/pull/1670',
      },
      {
        name: 'Bookshelf \u0026 misc bucket support',
        url: 'https://github.com/Wynntils/Wynntils/pull/1754',
      },
      {
        name: 'Block bank support',
        url: 'https://github.com/Wynntils/Wynntils/pull/1788',
      },
      {
        name: 'Custom page names',
        url: 'https://github.com/Wynntils/Wynntils/pull/2023',
      },
      {
        name: '2.1 Update merge',
        url: 'https://github.com/Wynntils/Wynntils/pull/2637',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/Resources/Wynntils/NamesAndJumps.mp4',
      },
    ],
  },
  {
    title: 'Transcribe into and from Gavellian and Wynnic',
    description: [
      'Converts Unicode Wynncraft glyphs back into readable English and allows input in either language using \u003c\u003c \u003e\u003e or [[]] syntax, as well as input mode toggles in chat UI.',
    ],
    prs: [
      {
        name: 'Main feature PR',
        url: 'https://github.com/Wynntils/Wynntils/pull/1901',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/Resources/Wynntils/WynnicAndGavellianTranscription.mp4',
      },
    ],
  },
  {
    title: 'Settings Screen Redesign',
    description: [
      'Added proper scrolling, category tags, filtering, checkboxes, search highlighting, and improved navigation between feature list and config options.',
    ],
    prs: [
      {
        name: 'Settings redesign',
        url: 'https://github.com/Wynntils/Wynntils/pull/2335',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/Resources/Wynntils/SettingsRedesign.mp4',
      },
    ],
  },
  {
    title: 'Container Model Refactor',
    description: [
      'Replaced manual screen checks with a new `WynncraftContainer` abstract class with pattern-based matching and metadata properties like scrollable/resizeable/fullscreen container attributes.',
    ],
    prs: [
      {
        name: 'Container refactor',
        url: 'https://github.com/Wynntils/Wynntils/pull/2416',
      },
    ],
  },
  {
    title: 'Item Filter GUI',
    description: [
      'Added UI-driven item filtering so users no longer need to type syntax like manaRegen:\u003e5 manually. UI builds syntax behind the scenes.',
    ],
    prs: [
      {
        name: 'Feature PR',
        url: 'https://github.com/Wynntils/Wynntils/pull/2417',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/Resources/Wynntils/ItemFilterGUI.mp4',
      },
    ],
  },
  {
    title: 'Raid Progress Overlay \u0026 Print Times',
    description: [
      'Tracks raid times for each challenge room and boss room. Originally used labels and chat hooks, later updated for Wynncraft 2.1 to use scoreboards instead and then further updated to track specific rooms instead of the generic room.',
    ],
    prs: [
      {
        name: 'Original feature',
        url: 'https://github.com/Wynntils/Wynntils/pull/2446',
      },
      {
        name: '2.1 update',
        url: 'https://github.com/Wynntils/Wynntils/pull/2662',
      },
      {
        name: 'Specific room tracking',
        url: 'https://github.com/Wynntils/Wynntils/pull/3199',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/Resources/Wynntils/TNA.png',
        alt: 'Screenshot of raid progress overlay.',
      },
    ],
  },
  {
    title: 'Overlay Selection \u0026 Management Screen Redesign',
    description: [
      'Combined overlay config options with selection UI, added filters, new overlay types, preview button, and improved resizing visuals.',
    ],
    prs: [
      {
        name: 'UI redesign',
        url: 'https://github.com/Wynntils/Wynntils/pull/2502',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/Resources/Wynntils/OverlaySelectionRedesign.mp4',
      },
      {
        type: 'video',
        src: '/Resources/Wynntils/OverlayManagementRedesign.mp4',
      },
    ],
  },
  {
    title: 'Add Colour Picker for Colour Inputs',
    description: [
      'Added a UI allowing users to select colours using sliders and input fields, replacing manual hex entry for several configuration screens.',
    ],
    prs: [
      {
        name: 'Colour picker PR',
        url: 'https://github.com/Wynntils/Wynntils/pull/2818',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/Resources/Wynntils/ColourPicker.mp4',
      },
    ],
  },
  {
    title: 'Add support for Wynncraft 2.1.1',
    description: [
      'Updated the mod to support the beta version of Wynncraft 2.1.1 so that a compatible update could be released immediately when the server update went live.',
    ],
    prs: [
      {
        name: 'Compatibility update',
        url: 'https://github.com/Wynntils/Wynntils/pull/2980',
      },
    ],
  },
  {
    title: 'Minecraft 1.21.4 Port',
    description: ['Updated the mod from Minecraft 1.21.1 to Minecraft 1.21.4.'],
    prs: [
      {
        name: 'Port',
        url: 'https://github.com/Wynntils/Wynntils/pull/2973',
      },
    ],
  },
  {
    title: 'Aspect Guide',
    description: ['Implemented an Aspect Guide so users can easily view Aspects.'],
    prs: [
      {
        name: 'Guide implementation',
        url: 'https://github.com/Wynntils/Wynntils/pull/3158',
      },
      {
        name: 'HTML API Parser',
        url: 'https://github.com/Wynntils/Static-Storage/pull/258',
      },
    ],
  },
  {
    title: 'Reworks \u0026 QoL',
    description: [
      'A large update that focused on reworking or updating some old features and adding new QoL.',
    ],
    prs: [
      {
        name: 'Head PR with all changes targeted',
        url: 'https://github.com/Wynntils/Wynntils/pull/3240',
      },
    ],
  },
  {
    title: 'Add support for Wynncraft 2.1.3',
    description: [
      'Updated the mod to support the beta version of Wynncraft 2.1.3 so that a compatible update could be released immediately when the server update went live. Whilst the PR branch wasn\u0027t authored by me, the majority of the work was done by me.',
    ],
    prs: [
      {
        name: 'Compatibility update',
        url: 'https://github.com/Wynntils/Wynntils/pull/3347',
      },
    ],
  },
  {
    title: 'Hades Updates',
    description: [
      'Updated Hades to support showing guild member locations on the map and minimap. Added the option for users to share their gear with mutual friends, party members and guild members.',
    ],
    prs: [
      {
        name: 'Guild members on map',
        url: 'https://github.com/Wynntils/Wynntils/pull/3533',
      },
      {
        name: 'Gear sharing',
        url: 'https://github.com/Wynntils/Wynntils/pull/3553',
      },
    ],
  },
  {
    title: 'Minecraft 1.21.11 Port',
    description: [
      'Updated the mod from Minecraft 1.21.4 to Minecraft 1.21.11. Included a full rewrite of font, texture and geometry rendering as well as other misc rendering changes.',
    ],
    prs: [
      {
        name: 'Port',
        url: 'https://github.com/Wynntils/Wynntils/pull/3567',
      },
    ],
  },
  {
    title: 'Config Profiles',
    description: [
      'Added 5 config profiles for users to choose from to set the default enabled status for all of the Wynntils features.',
    ],
    prs: [
      {
        name: 'Adding config profiles',
        url: 'https://github.com/Wynntils/Wynntils/pull/3664',
      },
    ],
  },
  {
    title: 'Customising Overlay Render Order',
    description: [
      'Allows users to customise the order that overlays are rendered in to ensure overlays render above or below each other however they want.',
    ],
    prs: [
      {
        name: 'Customise render order',
        url: 'https://github.com/Wynntils/Wynntils/pull/3720',
      },
    ],
  },
];
