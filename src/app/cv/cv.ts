import {Component} from '@angular/core';
import {PdfViewer} from '../pdf-viewer/pdf-viewer';
import {Navbar} from '../navbar/navbar';
import {Footer} from '../footer/footer';
import {SectionHeader} from '../section-header/section-header';
import {Hero} from '../hero/hero';

@Component({
  imports: [
    PdfViewer,
    SectionHeader,
  ],
  selector: 'app-cv',
  styleUrl: './cv.css',
  templateUrl: './cv.html',
})
export class Cv {}
