import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'no-content',
  providers: [
    NavbarComponent
  ],
  template: `
    <navbar></navbar>
    <div>
      <h1>Work in progress! ;-) </h1>
    </div>
  `
})
export class NoContentComponent {
}
