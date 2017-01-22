import {Component, Input} from "@angular/core";

@Component({
  selector: 'builditem',
  template: `
  <i *ngIf="!isRunning()" class="fa fa-check-square" [style.color]="getColor()" aria-hidden="true"></i>
  <i *ngIf="isRunning()" class="fa fa-cog fa-spin fa-lg fa-fw"></i>
  `
})
export class BuildItem {

  @Input() status: string;

  constructor(){}

  getColor() {
    if(this.status === "success") {
      return "green";
    }else if (this.status === "failure") {
      return "red";
    }
  }

  isRunning() {
    if(this.status === "running"){
      return true;
    }else{
      return false;
    }
  }
}
