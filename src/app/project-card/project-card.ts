import { Component, computed, input } from '@angular/core';
import { Project } from '../models/project';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  project = input.required<Project>();
  readonly isExternal = computed(() => /^https?:\/\//i.test(this.project().link));
}
