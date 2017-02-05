import { Component } from '@angular/core';
import {Navbar} from "../navbar/navbar.component";

@Component({
  selector: 'no-content',
  providers: [
    Navbar
  ],
  template: `
    <navbar></navbar>
    <div>
      <h1>Work in progress! ;-) </h1>
    </div>
  `
})
export class NoContent {
}
