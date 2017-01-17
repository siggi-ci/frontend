import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Organization, CurrentUser} from "./model";
import {RepositoriesService} from "./repositories.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'repositories',
  template: `
    <navbar></navbar>
    <div>
      <div class="row">
        <div class="col-md-4">
          <div id="user">
            <h4>User</h4>
            <div>
              <button type="button" class="btn btn-default" (click)="showUserRepositories()">{{currentUser?.name}}</button>
            </div>
          </div>
          <div id="orgas">
            <h4>Orgas</h4>
            <div class="btn-group-vertical" role="group">
              <button *ngFor="let orga of organizations" #mybutton value="orgaOne" type="button" class="btn btn-default" (click)="showOrgaRepositories(orga)">{{orga?.name}}</button>
            </div>
          </div>
        </div>
      
        <div class="col-md-8">
          <div class="row">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
    `,
  providers: [
    RepositoriesService
  ]
})
export class RepositoriesCmp {
  private repoProvider: string;
  private currentUser: CurrentUser;
  private organizations: Observable<Organization>;

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: RepositoriesService){
  }

  ngOnInit() {
    const provider = this._route.snapshot.params['provider'];
    this.repoProvider = provider;
    this.loadCurrentUser();
    this.loadOrganization();
  }

  loadCurrentUser() {
    this._service.getCurrentUser(this.repoProvider).subscribe(user => {
      this.currentUser = user;
      console.log("currentUser: ", this.currentUser)
    });
  }

  loadOrganization() {
    console.log('Load orga-links for current user and provider:', this.repoProvider);
    this._service.getOrgas(this.repoProvider).subscribe(orgas => {
      this.organizations = orgas;
      console.log("organizations: ", this.organizations);
    });
  }

  showUserRepositories(){
    this._router.navigate(['repositories', this.repoProvider , 'user']);
  }

  showOrgaRepositories(orga:Organization){
    this._router.navigate(['repositories', this.repoProvider , 'orga', orga.name]);
  }

}
