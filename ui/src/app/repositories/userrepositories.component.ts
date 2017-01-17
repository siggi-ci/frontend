import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RepositoryEnabler} from "./repositoryEnabler.component";
import {RepositoriesService} from "./repositories.service";
import {RepositoryInfo} from "./model";

@Component({
  selector: 'userrepositories',
  template:`
    <div id="container">
      <h3>UserRepositories</h3>
      <div class="row" *ngFor="let ri of repositoryInfos; let i = index">
        <hr>
        <repositoryEnabler [repositoryInfo]="ri" [index]="i" [provider]="repoProvider"></repositoryEnabler>
      </div>
    </div>
  `
})
export class UserRepositoriesCmp {

  repositoryInfos: RepositoryInfo[];
  private repoProvider: string;

  constructor(private route: ActivatedRoute,private _service: RepositoriesService){
  }

  ngOnInit() {
    const provider = this.route.snapshot.parent.params['provider'];
    this.repoProvider = provider;
    this.loadCurrentUserRepositories();
  }

  loadCurrentUserRepositories(){
    console.log('Load all user-repositories for provider ', this.repoProvider);
    this._service.getRepoInfo(this.repoProvider).subscribe(ri => {
      this.repositoryInfos = ri;
    });
  }
}
