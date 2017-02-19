import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BuildsContainer} from "./buildscontainer.component";
import {HistoryComponent} from "./history.component";
import {PullRequestsComponent} from "./pullrequests.component";
import {BuildsRoutes} from "./builds.routes";
import {CurrentBuildCompnent} from "./currentbuild.component";
import {NavbarModule} from "../navbar/navbar.module";
import {SettingsComponent} from "./settings.component";
import {BranchesComponent} from "./branches.component";
@NgModule({
  imports: [CommonModule, BuildsRoutes, NavbarModule],
  declarations: [
    BuildsContainer,
    HistoryComponent,
    PullRequestsComponent,
    CurrentBuildCompnent,
    SettingsComponent,
    BranchesComponent
  ]
})
export class BuildsModule {}
