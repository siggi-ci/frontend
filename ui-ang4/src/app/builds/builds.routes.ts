import {Routes, RouterModule} from '@angular/router';
import {PullRequestsComponent} from './pullrequests.component';
import {HistoryComponent} from './history.component';
import {CurrentBuildComponent} from './currentbuild.component';
import {BuildsContainerComponent} from './buildscontainer.component';
import {SettingsComponent} from './settings.component';
import {BranchesComponent} from './branches.component';

const routes: Routes = [
  {path: 'builds/:provider/:orga/:name', component: BuildsContainerComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'current'
      },
      {
        path: 'current', pathMatch: 'full', component: CurrentBuildComponent
      },
      {
        path: 'branches', pathMatch: 'full', component: BranchesComponent
      },
      {
        path: 'build/:buildnumber', component: CurrentBuildComponent
      },
      {
        path: 'history', pathMatch: 'full', component: HistoryComponent
      },
      {
        path: 'pull_requests', component: PullRequestsComponent
      },
      {
        path: 'settings', component: SettingsComponent
      }
    ]
  }
];

export const BuildsRoutes = RouterModule.forChild(routes);
