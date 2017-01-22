import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavbarModule} from "../navbar/navbar.module";
import {Navbar} from "../navbar/navbar.component";
import {NoContent} from "./no-content.component";

@NgModule({
    imports: [CommonModule, NavbarModule],
    declarations: [
        NoContent
    ],
    exports:[
        NoContent
    ]
})
export class NoContentModule {}