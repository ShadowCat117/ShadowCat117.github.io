import {Component, input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  title = input.required<string>();
  subtitle = input.required<string>();
}
