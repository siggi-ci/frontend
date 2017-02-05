import {Routes, RouterModule} from "@angular/router";
import {ScmProvidersCmp} from "./scmproviders.component";

const routes:Routes = [
  { path: 'scmproviders', component: ScmProvidersCmp },
];

export const ScmProvidersRoutes = RouterModule.forChild(routes);
