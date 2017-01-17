import {Component, OnInit} from '@angular/core';
import {LatestBuild, DashboardService} from "./dashboard.service";

@Component({
  selector: 'dashboard',
  providers: [DashboardService],
  template: `
    <navbar></navbar>
    <div>
    <h2>
    Something <i class="fa fa-check"></i> <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
    </h2>
    <h3> More  <a target="_blank" href="#"><i class="fa fa-github" aria-hidden="true"></i></a> </h3>
    <!--
    <div *ngFor="let build of lastBuilds; let i = index" class="bd-callout bd-callout-success">
        <div class="row">
         <div class="col-md-5">
            <h4><!--<provider-icon [latestBuild]="build"></provider-icon> -->
            <!--
            <a class="nav-link" [routerLink]=" ['/builds', build.provider, build.orga, build.repo]">{{build.provider}} / {{build.orga}} / {{build.repo}}</a></h4>
         </div>
         <div class="col-md-4">
            <i class="fa fa-check-square" style="color: red" aria-hidden="true"></i> | <i class="fa fa-check-square" style="color: green" aria-hidden="true"></i> | <i class="fa fa-check-square" style="color: red" aria-hidden="true"></i> | <i class="fa fa-check-square" style="color: green" aria-hidden="true"></i> | <i class="fa fa-cog fa-spin fa-lg fa-fw"></i>
         </div>
         <div class="col-md-3">
            text-rechts
         </div>
        </div>
    </div>
    -->
  `
})
export class DashboardComponent implements OnInit {

  lastBuilds: LatestBuild[];

  constructor(private _dashboardService: DashboardService) {
  }

  ngOnInit(){
    //this.loadLatestBuilds();
  }

  loadLatestBuilds(){
/*    console.log("load latest-builds");
    this._dashboardService..subscribe(data => {
      this.lastBuilds = data;
      console.log("loaded last-builds", this.lastBuilds)
    },
    err => {
      console.log(err);
    },
    () => {
      console.log("load latest-builds --> done")
    });*/
  }

}
