import {Routes, RouterModule} from '@angular/router';
import {ScmProvidersComponent} from './scmproviders.component';

const routes: Routes = [
  { path: 'scmproviders', component: ScmProvidersComponent },
];

export const ScmProvidersRoutes = RouterModule.forChild(routes);
