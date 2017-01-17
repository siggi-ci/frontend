import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Routing} from './app.routing';
import { AppComponent } from './app.component';
import {NoContent} from "./no-content/no-content";
import {ScmProvidersModule} from "./scmproviders/scmproivders.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {RepositoriesModule} from "./repositories/repositories.module";


@NgModule({
  declarations: [
    AppComponent,
    NoContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ScmProvidersModule,
    DashboardModule,
    RepositoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
