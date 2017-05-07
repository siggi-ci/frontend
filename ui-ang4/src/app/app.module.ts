import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BuildsModule} from './builds/builds.module';
import {NoContentModule} from './no-content/no-content.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ScmProvidersModule} from './scmproviders/scmproivders.module';
import {RepositoriesModule} from './repositories/repositories.module';
import {Routing} from './app.routing';

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
    NoContentModule,
    BuildsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
