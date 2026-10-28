import {Component, input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-header',
  styleUrl: './section-header.css',
  templateUrl: './section-header.html',
})
export class SectionHeader {
  title = input.required<string>();
}
