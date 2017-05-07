import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {NavbarModule} from '../navbar/navbar.module';
import {DashboardRoutes} from './dashboard.routes';
import {BuildItemComponent} from './builditem/builditem.component';
import {ProviderIconComponent} from './providericon.component';

@NgModule({
  imports: [CommonModule, DashboardRoutes, NavbarModule],
  declarations: [
    DashboardComponent,
    BuildItemComponent,
    ProviderIconComponent
  ],
  exports: [
    DashboardComponent, BuildItemComponent, ProviderIconComponent
  ]
})
export class DashboardModule {}
