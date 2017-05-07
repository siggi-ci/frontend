import {Component, Input} from '@angular/core';

@Component({
  selector: 'builditem',
  template: `
  <i *ngIf='!isRunning()' class='fa fa-check-square' [style.color]='getColor()' aria-hidden='true'></i>
  <i *ngIf='isRunning()' class='fa fa-cog fa-spin fa-lg fa-fw'></i>
  `
})
export class BuildItemComponent {

  @Input() status: string;

  constructor() {}

  getColor() {
    if (this.status.toLowerCase() === 'success') {
      return 'green';
    }else if (this.status.toLowerCase() === 'failure') {
      return 'red';
    }
  }

  isRunning() {
    if (this.status.toLowerCase() === 'running') {
      return true;
    }else if (this.status.toLowerCase() === 'created') {
      return true;
    }else {
      return false;
    }
  }
}
