import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  readonly darkMode = signal(this.document.documentElement.dataset['theme'] === 'dark');

  toggleTheme() {
    const dark = !this.darkMode();
    this.darkMode.set(dark);
    const theme = dark ? 'dark' : 'light';
    this.document.documentElement.dataset['theme'] = theme;
    try {
      this.document.defaultView?.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }
}
