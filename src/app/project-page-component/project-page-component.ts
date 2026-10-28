import { Component, input } from '@angular/core';
import { ProjectPage } from '../models/project-page';
import { PdfViewer } from '../pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-project-page-component',
  imports: [PdfViewer],
  templateUrl: './project-page-component.html',
  styleUrl: './project-page-component.css',
})
export class ProjectPageComponent {
  project = input.required<ProjectPage>();
}
