import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarModule} from '../navbar/navbar.module';
import {NoContentComponent} from './no-content.component';

@NgModule({
    imports: [CommonModule, NavbarModule],
    declarations: [
        NoContentComponent
    ],
    exports: [
        NoContentComponent
    ]
})
export class NoContentModule {}
