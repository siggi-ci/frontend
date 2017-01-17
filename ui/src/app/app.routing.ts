import {RouterModule, Routes} from "@angular/router";
import {NoContent} from "./no-content/no-content";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'  },
  //{ path: 'simple', loadChildren: 'app/simple/simple.module'},
  { path: '**',    component: NoContent }
];

export const Routing = RouterModule.forRoot(routes);
