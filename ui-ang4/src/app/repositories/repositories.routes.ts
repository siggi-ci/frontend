import {Routes, RouterModule} from "@angular/router";
import {RepositoriesComponent} from "./repositories.component";
import {UserRepositoriesComponent} from "./userrepositories.component";
import {OrgaRepositoriesCmp} from "./orgarepositories.component";


const routes: Routes = [
  { path: 'repositories',
    children: [
      {
        path: ':provider',
        component: RepositoriesComponent,
        children: [
          {
            path: '', pathMatch: 'full', redirectTo: 'user'
          },
          {
            path: 'user',
            component: UserRepositoriesComponent
          },
          {
            path: 'orga/:name',
            component: OrgaRepositoriesCmp
          }
        ]
      }
    ]
  }
];

export const RepositoriesRoutes = RouterModule.forChild(routes);
