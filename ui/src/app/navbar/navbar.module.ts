import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Navbar} from "./navbar.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports:[CommonModule, RouterModule],
  declarations: [
    Navbar
  ],
  exports:[Navbar]
})
export class NavbarModule{}
