import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {LatestBuild} from "./models";
import {BuildItem} from "./builditem/builditem.component";

@Component({
  selector: 'dashboard',
  providers: [DashboardService, BuildItem],
  template: `
    <navbar></navbar>
    <div>
    <section *ngIf="isLoading && !errorMessage">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </section>
    <div *ngFor="let repository of lastBuilds; let i = index" class="bd-callout bd-callout-success">
        <div class="row">
         <div class="col-md-5">
            <h4><!--<provider-icon [latestBuild]="build"></provider-icon> -->
            <a class="nav-link" [routerLink]=" ['/builds', repository.provider, repository.orga, repository.repo]">{{repository.provider}} / {{repository.orga}} / {{repository.repo}}</a></h4>
         </div>
         <div class="col-md-4">
          <a *ngFor="let build of repository?.builds; let idx = index" [routerLink]=" ['/builds', repository.provider, repository.orga, repository.repo, build.buildnumber]">
            <builditem [status]="build.state"></builditem>
          </a>
         </div>
         <div class="col-md-3">
            last commit-id
         </div>
        </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {

  lastBuilds: LatestBuild[];

  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private _dashboardService: DashboardService) {
  }

  ngOnInit(){
    this.loadLatestBuilds();
  }

  loadLatestBuilds() {
    this.lastBuilds = [];
    this.isLoading = true;
    console.log("load latest-builds");
    console.log("show-spinner : ", (this.isLoading && !this.errorMessage))

    this._dashboardService.getLatestBuilds().subscribe(data => {
      this.lastBuilds = data;
      console.log("loaded last-builds", this.lastBuilds)
    },
    err => {
      console.log(err);
    },
    () => {
      this.isLoading = false;
      console.log("load latest-builds --> done")
      console.log("show-spinner : ", (this.isLoading && !this.errorMessage));
    });
  }

}
