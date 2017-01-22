import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RepositoryEnabler} from "./repositoryEnabler.component";
import {RepositoriesService} from "./repositories.service";
import {RepositoryInfo} from "./model";
import {Observable} from "rxjs";

@Component({
  selector: 'orgarepositories',
  template: `
    <div id="container">
        <h3>OrgaRepositories</h3>
        <section *ngIf="isLoading && !errorMessage">
          <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span class="sr-only">Loading...</span>
        </section>
        <div class="row" *ngFor="let ri of repositoryInfos; let i = index">
            <hr>
            <repositoryEnabler [repositoryInfo]="ri" [index]="i" [provider]="provider"></repositoryEnabler>
        </div>
    </div>
    `,
  providers: [
    RepositoriesService
  ]
})
export class OrgaRepositoriesCmp {

  repositoryInfos: RepositoryInfo[];
  private provider: string;

  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private _service: RepositoriesService){
  }

  ngOnInit() {
    const provider = this.route.snapshot.parent.params['provider'];
    this.provider = provider;
    //because 'ngOnInit' is only called once, we register to listen when the
    // param changed, otherwise on events when user clicks for another orga
    this.route.params.subscribe(d => {
      const orga = d['name'];
      this.loadOrgaRepositories(orga);
    });
   }

  loadOrgaRepositories(orga: string){
    this.repositoryInfos = [];
    this.isLoading = true;
    console.log("load orgarepositories");
    console.log("show-spinner : ", (this.isLoading && !this.errorMessage))
    console.log('Load repositories for organization with provider :' + this.provider + ' and orga : ' + orga );
    this._service.getOrgaRepoInfo(this.provider, orga).subscribe(ri => {
      this.repositoryInfos = ri;
    },
    err => console.log(err),
    () => {
      this.isLoading = false;
      console.log("orgarepositories loaded")
      console.log("show-spinner : ", (this.isLoading && !this.errorMessage));
    });
  }
}
