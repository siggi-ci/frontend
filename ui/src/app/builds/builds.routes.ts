import {Routes, RouterModule} from "@angular/router";
import {PullRequestsComponent} from "./pullrequests.component";
import {HistoryComponent} from "./history.component";
import {CurrentBuildCompnent} from "./currentbuild.component";
import {BuildsContainer} from "./buildscontainer.component";
import {SettingsComponent} from "./settings.component";
import {BranchesComponent} from "./branches.component";

const routes : Routes = [
  {path: "builds/:provider/:orga/:name", component: BuildsContainer,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'current'
      },
      {
        path: 'current',pathMatch: 'full', component: CurrentBuildCompnent
      },
      {
        path: 'branches',pathMatch: 'full', component: BranchesComponent
      },
      {
        path: 'build/:buildnumber', component: CurrentBuildCompnent
      },
      {
        path: 'history',pathMatch: 'full', component: HistoryComponent
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
