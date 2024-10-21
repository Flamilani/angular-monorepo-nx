import { AfterViewInit, Component } from '@angular/core';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';

@Component({
  selector: 'lib-slides',
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.scss',
})
export class SlidesComponent implements AfterViewInit {
  ngAfterViewInit(){

    Reveal.initialize({
      plugins: [RevealMarkdown],
      width: 1280,
      height: 720,
      maxScale: 1,
    })
  }
}
