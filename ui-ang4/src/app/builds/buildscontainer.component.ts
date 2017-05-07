import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'builds',
  template: `
    <navbar></navbar>
    <div>
        <div id="build">
            <h4><a [routerLink]=" ['/builds', provider, orga, name]">{{provider}} / {{orga}} / {{name}}</a></h4>
            <ul class="nav nav-tabs">
              <li role="presentation" [routerLinkActive]="['active']"><a [routerLink]=" ['./current'] ">
                  Current
                </a></li>
              <li role="presentation" [routerLinkActive]="['active']"><a [routerLink]=" ['./branches'] ">
                  Branches
                </a></li>
              <li role="presentation" [routerLinkActive]="['active']"><a [routerLink]=" ['./history'] ">
                  History
                </a></li>
              <li role="presentation" [routerLinkActive]="['active']"><a [routerLink]=" ['./pull_requests'] ">
                  Pull Requests
                </a></li>
              <li role="presentation" [routerLinkActive]="['active']"><a [routerLink]=" ['./settings'] ">
                  Settings
                </a></li>
            </ul>
            <router-outlet></router-outlet>
        </div>        
    </div>
`
})
export class BuildsContainerComponent implements OnInit {

  provider: string;
  orga: string;
  name: string;

  constructor(private _activatedRoute: ActivatedRoute){
  }

  ngOnInit() {
    this.provider = this._activatedRoute.snapshot.params['provider'];
    this.orga = this._activatedRoute.snapshot.params['orga'];
    this.name = this._activatedRoute.snapshot.params['name'];

    this._activatedRoute.params.subscribe(d => {
      this.orga = d['orga'];
      this.provider = d['provider'];
      this.name = d['name'];
    });
  }

}
