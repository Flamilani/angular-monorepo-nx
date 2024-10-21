import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public router: Router) {}
}
