import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {DashboardComponent} from "./dashboard.component";
import {NavbarModule} from "../navbar/navbar.module";
import {DashboardRoutes} from "./dashboard.routes";
import {BuildItem} from "./builditem/builditem.component";
import {ProviderIconComponent} from "./providericon.component";

@NgModule({
  imports: [CommonModule, DashboardRoutes, NavbarModule],
  declarations: [
    DashboardComponent,BuildItem,ProviderIconComponent
  ],
  exports: [
    DashboardComponent, BuildItem, ProviderIconComponent
  ]
})
export class DashboardModule{}
