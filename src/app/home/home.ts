import { Component } from '@angular/core';
import {Project} from '../models/project';
import {ProjectCard} from "../project-card/project-card";
import {SectionHeader} from "../section-header/section-header";
import {Hero} from '../hero/hero';

@Component({
  imports: [
    ProjectCard,
    SectionHeader
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly tools: Project[] = [
    {
      name: 'Wynntils Changelog Generator',
      description: 'Build Wynntils release notes with templates for features, configs, commands, functions, and fixes. Preview and copy the Markdown.',
      image: '/Resources/Wynntils/Wynntils.png',
      link: '/tools/wynntils-changelog',
    },
  ];

  primaryProjects: Project[] = [
    {
      name: 'Wynntils',
      description: 'Rewrite of the original Wynntils mod for modern Minecraft versions. I contribute features and fixes as part of the development team.',
      image: '/Resources/Wynntils/Wynntils.png',
      link: '/projects/wynntils'
    },
    {
      name: 'Maze Bounce',
      description: 'A Unity-based mobile game where players place corners in procedurally generated mazes to launch a ball to the goal.',
      image: '/Resources/MazeBounce/MazeBounce.png',
      link: '/projects/maze-bounce'
    },
    {
      name: 'CC-117',
      description: 'A Discord bot for a Wynncraft guild that uses the Wynncraft API to provide various guild-related features.',
      image: '/Resources/CC-117/TrackedGuilds.png',
      link: '/projects/cc-117'
    },
    {
      name: 'Accessible Codenames',
      description: 'Final year project recreating Codenames as an Android app focused heavily on accessibility and UX.',
      image: '/Resources/Codenames/Codenames.jpg',
      link: '/projects/codenames'
    },
    {
      name: 'Myth Chase',
      description: 'A Pac-Man style Unity game made for university coursework, featuring custom characters and levels.',
      image: '/Resources/MythChase/MythChase.jpg',
      link: '/projects/myth-chase'
    }
  ]

  collaborativeProjects: Project[] = [
    {
      name: 'Wynntils Legacy',
      description: 'Added export tooling for favourites/waypoints for the final release of the original Wynntils mod.',
      image: '/Resources/WynntilsLegacy/WynntilsLegacy.png',
      link: 'https://github.com/Wynntils/Wynntils-Legacy/pull/696'
    },
    {
      name: 'Balls and Mines',
      description: 'Added online multiplayer support to a game-jam project originally built by friends.',
      image: '/Resources/BallsAndMines/BallsAndMines.jpg',
      link: 'https://github.com/JoeSubbi/Balls-and-Mines/pull/12'
    },
    {
      name: 'RemoveHUD',
      description: 'Ported to newer Minecraft versions (1.20.2 and 1.21) and added new UI customisation features.',
      image: '/Resources/RemoveHUD/RemoveHUD.png',
      link: '/projects/remove-hud'
    },
    {
      name: 'ControlifyWynn',
      description: 'Updated controller-support mod to hook into the latest Artemis APIs for Wynncraft.',
      image: '/Resources/ControlifyWynn/ControlifyWynn.png',
      link: 'https://github.com/aws404/ControlifyWynn/pull/3'
    },
    {
      name: 'CustomScoreboard',
      description: 'Ported the scoreboard customisation mod to 1.21 and contributed feature updates.',
      image: '/Resources/CustomScoreboard/CustomScoreboard.png',
      link: 'https://github.com/r0yzer/customscoreboard/pull/5'
    }
  ]
}
