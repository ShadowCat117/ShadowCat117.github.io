import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Footer} from './footer/footer';
import {Hero} from './hero/hero';

@Component({
  imports: [RouterOutlet, Navbar, Footer, Hero],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = signal('');
  subtitle = signal('');

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateHero();
      }
    });
  }

  private updateHero() {
    let route = this.router.routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    this.title.set(route.snapshot.data['title']);
    this.subtitle.set(route.snapshot.data['subtitle']);

    this.changeDetector.detectChanges();
  }
}
