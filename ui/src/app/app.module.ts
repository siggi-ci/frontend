import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Routing} from './app.routing';
import { AppComponent } from './app.component';
import {ScmProvidersModule} from "./scmproviders/scmproivders.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {RepositoriesModule} from "./repositories/repositories.module";
import {NoContentModule} from "./no-content/no-content.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ScmProvidersModule,
    DashboardModule,
    RepositoriesModule,
    NoContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
