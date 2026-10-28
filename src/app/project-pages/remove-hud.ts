import { ProjectPage } from '../models/project-page';

export const removeHud: ProjectPage = {
  title: 'RemoveHUD',
  subtitle: 'Minecraft HUD customization mod for Fabric',
  content: [
    {
      type: 'text',
      content: 'RemoveHUD is a Fabric Minecraft mod that allows players to hide or reposition HUD elements. It offers control over hotbar placement, overlays, tooltips, experience bars, and other on-screen UI components to create a cleaner or more personalized interface.'
    },
    {
      type: 'text',
      content: 'I contributed by porting the mod to newer Minecraft versions and expanding its configuration options to support new elements introduced in later updates.'
    },
    {
      type: 'text',
      content: 'Contributions'
    },
    {
      type: 'image',
      content: '/Resources/RemoveHUD/removehud1202.png'
    },
    {
      type: 'text',
      content: 'The pull request for the 1.20.2 port is available below.'
    },
    {
      type: 'image',
      content: '/Resources/RemoveHUD/removehud121.png'
    },
    {
      type: 'text',
      content: 'The pull request for the 1.21 port, including new offsets for EXP bar, hotbar, overlay messages and tooltips, is available below.'
    }
  ],
  repositories: [
    {
      name: '1.20.2 Port Pull Request',
      url: 'https://github.com/IzzyDotExe/RemoveHud/pull/16'
    },
    {
      name: '1.21 Port Pull Request',
      url: 'https://github.com/IzzyDotExe/RemoveHud/pull/19'
    }
  ]
};
