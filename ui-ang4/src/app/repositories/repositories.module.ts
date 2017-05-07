import {NgModule} from '@angular/core';
import {RepositoryEnabler} from './repositoryEnabler.component';
import {UserRepositoriesComponent} from './userrepositories.component';
import {OrgaRepositoriesCmp} from './orgarepositories.component';
import {RepositoriesComponent} from './repositories.component';
import {CommonModule} from '@angular/common';
import {RepositoriesRoutes} from './repositories.routes';
import {NavbarModule} from '../navbar/navbar.module';
import {LockComponent} from './lock/lock.component';
import {RepoLinkComponent} from './repoLink/repolink.component';


@NgModule({
  declarations: [
    RepositoriesComponent,
    OrgaRepositoriesCmp,
    UserRepositoriesComponent,
    RepositoryEnabler,
    LockComponent,
    RepoLinkComponent
  ],
  imports: [CommonModule, RepositoriesRoutes, NavbarModule]
})
export class RepositoriesModule {}
