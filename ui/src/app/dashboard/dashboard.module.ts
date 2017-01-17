import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {DashboardComponent} from "./dashboard.component";
import {NavbarModule} from "../navbar/navbar.module";
import {DashboardRoutes} from "./dashboard.routes";

@NgModule({
  imports: [CommonModule, DashboardRoutes, NavbarModule],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule{}
