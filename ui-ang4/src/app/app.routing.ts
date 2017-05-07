import {RouterModule, Routes} from '@angular/router';
import {NoContentComponent} from './no-content/no-content.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'  },
  // { path: 'simple', loadChildren: 'app/simple/simple.module'},
  { path: '**',    component: NoContentComponent }
];

export const Routing = RouterModule.forRoot(routes);
