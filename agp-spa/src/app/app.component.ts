import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <agp-navbar></agp-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  }
