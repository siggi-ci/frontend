import {NgModule} from "@angular/core/src/metadata/ng_module";
import {CommonModule} from "@angular/common";
import {ScmProvidersCmp} from "./scmproviders.component";
import {NavbarModule} from "../navbar/navbar.module";
import {ScmProvidersRoutes} from "./scmproviders.routes";

@NgModule({
  imports:[CommonModule, ScmProvidersRoutes, NavbarModule],
  declarations:[
    ScmProvidersCmp
  ]
})
export class ScmProvidersModule{}
