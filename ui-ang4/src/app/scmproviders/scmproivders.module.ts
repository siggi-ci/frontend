import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScmProvidersComponent} from './scmproviders.component';
import {NavbarModule} from '../navbar/navbar.module';
import {ScmProvidersRoutes} from './scmproviders.routes';

@NgModule({
  imports: [CommonModule, ScmProvidersRoutes, NavbarModule],
  declarations: [
    ScmProvidersComponent
  ]
})
export class ScmProvidersModule {}
