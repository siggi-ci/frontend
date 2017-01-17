import {Component, Input} from "@angular/core";
import {RepositoryInfo} from "../model";

@Component({
  selector: 'repolink',
  template: `
  <a target="_blank" href="{{repositoryInfo?.htmlUrl}}"><i class="fa fa-github" aria-hidden="true"></i></a>
  `
})
export class RepoLink {

  @Input() repositoryInfo: RepositoryInfo;

}
