import { Component, Input } from '@angular/core';
import { RepositoryInfo } from './model';
import {RepositoriesService} from './repositories.service';


@Component({
  selector: 'repositoryEnabler',
  styleUrls: ['./repositoryEnabler.style.css'],
  templateUrl: './repositoryEnabler.template.html'
})
export class RepositoryEnabler {

  @Input() repositoryInfo: RepositoryInfo;
  @Input() index: number;
  @Input() provider: string;

  constructor(private _repositoriesService: RepositoriesService){}

  enableRepository() {
    console.log('Enable Repository ' + this.repositoryInfo.name);
    this._repositoriesService.enableRepository(this.provider, this.repositoryInfo)
      .subscribe(repositoryInfo => this.repositoryInfo = repositoryInfo);
  }

  disableRepository() {
    console.log('Disable Repository ' + this.repositoryInfo.name);
    this._repositoriesService.disableRepository(this.provider, this.repositoryInfo)
      .subscribe(repositoryInfo => this.repositoryInfo = repositoryInfo);
  }

  isEnabled() {
    return this.repositoryInfo.enabled;
  }

}
