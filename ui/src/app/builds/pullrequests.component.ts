import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pullrequests',
  template: `
    <div>
        <h3>PullRequests</h3>    
    </div>
  `
})
export class PullRequestsComponent{

  provider:string;
  orga:string;
  name:string;

  constructor(private _activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.provider = this._activatedRoute.snapshot.parent.params['provider'];
    this.orga = this._activatedRoute.snapshot.parent.params['orga'];
    this.name = this._activatedRoute.snapshot.parent.params['name'];
    this.fetchPullRequestBuilds(this.provider, this.orga, this.name);
  }

  fetchPullRequestBuilds(provider:string, orga:string, name:string){
    console.log("fetch PULL_REQUEST_BUILDS for : ", provider, orga, name);
  }
}
