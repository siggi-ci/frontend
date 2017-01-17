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
    console.log('Load repositories for organization with provider :' + this.provider + ' and orga : ' + orga );
    this._service.getOrgaRepoInfo(this.provider, orga).subscribe(ri => this.repositoryInfos = ri);
    // TODO, fetch repositories for specific 'orga'
  }
}
