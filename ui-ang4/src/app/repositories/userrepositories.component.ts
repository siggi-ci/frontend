import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RepositoryEnabler} from './repositoryEnabler.component';
import {RepositoriesService} from './repositories.service';
import {RepositoryInfo} from './model';

@Component({
  selector: 'userrepositories',
  template: `
    <div id='container'>
      <h3>UserRepositories</h3>
      <section *ngIf='isLoading && !errorMessage'>
        <i class='fa fa-spinner fa-pulse fa-3x fa-fw'></i>
        <span class='sr-only'>Loading...</span>
      </section>
      <div class='row' *ngFor='let ri of repositoryInfos; let i = index'>
        <hr>
        <repositoryEnabler [repositoryInfo]='ri' [index]='i' [provider]='repoProvider'></repositoryEnabler>
      </div>
    </div>
  `
})
export class UserRepositoriesComponent implements OnInit {

  repositoryInfos: RepositoryInfo[];
  private repoProvider: string;

  errorMessage = '';
  isLoading = true;

  constructor(private route: ActivatedRoute, private _service: RepositoriesService){
  }

  ngOnInit () {
    const provider = this.route.snapshot.parent.params['provider'];
    this.repoProvider = provider;
    this.loadCurrentUserRepositories();
  }

  loadCurrentUserRepositories() {
    console.log('load userrepositories');
    console.log('show-spinner : ', (this.isLoading && !this.errorMessage))
    console.log('Load all user-repositories for provider ', this.repoProvider);
    this._service.getRepoInfo(this.repoProvider).subscribe(ri => {
      this.repositoryInfos = ri;
    },
    err => console.log(err),
    () => {
      this.isLoading = false;
      console.log('userrepositories loaded')
      console.log('show-spinner : ', (this.isLoading && !this.errorMessage));
    });
  }
}
