import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'history',
  template: `
    <div>
        <h4>History (Fake)</h4>
        <table class="table table-hover">
            <tr class="alert-danger">
                <td><a [routerLink]=" ['../build', '12']"># 12</a></td>
                <td>errored</td>
                <td>he6h473</td>
            </tr>
            <tr class="alert-success">
                <td><a [routerLink]=" ['../build', '11']"># 11</a></td>
                <td>passed</td>
                <td>he6h473</td>
            </tr>
            <tr class="alert-success">
                <td><a [routerLink]=" ['../build', '10']"># 10</a></td>
                <td>passed</td>
                <td>he6h473</td>
            </tr>
            <tr class="alert-success">
                <td><a [routerLink]=" ['../build', '9']"># 9</a></td>
                <td>passed</td>
                <td>he6h473</td>
            </tr>
            <tr class="alert-danger">
                <td># 8</td>
                <td>errored</td>
                <td>he6h473</td>
            </tr>
            <tr class="alert-danger">
                <td># 7</td>
                <td>errored</td>
                <td>he6h473</td>
            </tr>
            <tr class="alert-success">
                <td># 6</td>
                <td>passed</td>
                <td>he6h473</td>
            </tr>
        </table>
    </div>
  `
})
export class HistoryComponent{

  provider:string;
  orga:string;
  name:string;

  constructor(private _activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.provider = this._activatedRoute.snapshot.parent.params['provider'];
    this.orga = this._activatedRoute.snapshot.parent.params['orga'];
    this.name = this._activatedRoute.snapshot.parent.params['name'];
    this.fetchHistory(this.provider, this.orga, this.name);
  }

  fetchHistory(provider:string, orga:string, name:string){
    console.log("fetch HISTORY for : ", provider, orga, name);
  }
}
