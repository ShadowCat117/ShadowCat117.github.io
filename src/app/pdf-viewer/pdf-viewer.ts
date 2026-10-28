import {Component, inject, input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  imports: [],
  selector: 'app-pdf-viewer',
  styleUrl: './pdf-viewer.css',
  templateUrl: './pdf-viewer.html',
})
export class PdfViewer {
  link = input.required<string>();

  private sanitizer = inject(DomSanitizer);

  get safeLink() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link());
  }
}
