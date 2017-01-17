import {Routes, RouterModule} from "@angular/router";
import {RepositoriesCmp} from "./repositories.component";
import {UserRepositoriesCmp} from "./userrepositories.component";
import {OrgaRepositoriesCmp} from "./orgarepositories.component";


const routes: Routes = [
  { path: 'repositories',
    children: [
      {
        path: ':provider',
        component: RepositoriesCmp,
        children: [
          {
            path: '', pathMatch: 'full', redirectTo: 'user'
          },
          {
            path: 'user',
            component: UserRepositoriesCmp
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
