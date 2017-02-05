import {Component, Input} from "@angular/core";
@Component({
  selector: 'lock',
  template: `
  <i *ngIf="isPrivateRepo()" class="fa fa-lock">
  </i>
  <i *ngIf="!isPrivateRepo()" class="fa fa-unlock">
  </i>
  `
})
export class Lock {

  @Input() privateRepo: boolean;

  isPrivateRepo(): boolean {
    return this.privateRepo;
  }
}
