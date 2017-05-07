import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuildsContainerComponent} from './buildscontainer.component';
import {HistoryComponent} from './history.component';
import {PullRequestsComponent} from './pullrequests.component';
import {BuildsRoutes} from './builds.routes';
import {CurrentBuildComponent} from './currentbuild.component';
import {NavbarModule} from '../navbar/navbar.module';
import {SettingsComponent} from './settings.component';
import {BranchesComponent} from './branches.component';

@NgModule({
  imports: [CommonModule, BuildsRoutes, NavbarModule],
  declarations: [
    BuildsContainerComponent,
    HistoryComponent,
    PullRequestsComponent,
    CurrentBuildComponent,
    SettingsComponent,
    BranchesComponent
  ]
})
export class BuildsModule {}
