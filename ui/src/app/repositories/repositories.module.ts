import {NgModule} from "@angular/core/src/metadata/ng_module";
import {RepositoryEnabler} from "./repositoryEnabler.component";
import {UserRepositoriesCmp} from "./userrepositories.component";
import {OrgaRepositoriesCmp} from "./orgarepositories.component";
import {RepositoriesCmp} from "./repositories.component";
import {CommonModule} from "@angular/common";
import {RepositoriesRoutes} from './repositories.routes';
import {NavbarModule} from "../navbar/navbar.module";
import {Lock} from "./lock/lock.component";
import {RepoLink} from "./repoLink/repolink.component";


@NgModule({
  declarations: [
    RepositoriesCmp,
    OrgaRepositoriesCmp,
    UserRepositoriesCmp,
    RepositoryEnabler,
    Lock,
    RepoLink
  ],
  imports: [CommonModule, RepositoriesRoutes, NavbarModule]
})
export class RepositoriesModule{}
