import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ScmProviderService} from "./scmproviders.service";
import {ScmProvider} from "./model";

@Component({
  selector: 'scmproviders',
  providers: [
    ScmProviderService
  ],
  template: `
    <navbar></navbar>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- <my-spinner [isRunning]=true [delay]="0"></my-spinner>-->
        <h3 class="text-center">Choose an SCM-Provider below</h3>
        <section *ngIf="isLoading && !errorMessage">
          <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span class="sr-only">Loading...</span>
        </section>
        <table class="table table-hover">
          <tbody>
          <tr *ngFor="let provider of scmProviders">
            <td>
              <a class="btn btn-primary btn-block btn-lg" role="button" href="{{provider.connectUrl}}">{{provider.name}}</a>
            </td>
          </tr>
          </tbody>
        </table>
        <section *ngIf="errorMessage">
            {{errorMessage}}
        </section>
      </div>
    </div>
  `
})
export class ScmProvidersCmp implements OnInit{

  scmProviders: ScmProvider[];

  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private _scmProviderService: ScmProviderService, private _router: Router){
  }

  ngOnInit(){
    console.log("on_init ScmProvidersCmp");
    this.loadScmProviders();
  }

  loadScmProviders() {
    console.log("load scm-providers");
    console.log("show-spinner : ", (this.isLoading && !this.errorMessage))
    //this.scmProviders = this._repoService.getScmProviders();
    this._scmProviderService.getScmProviders().subscribe(data => {
      this.scmProviders = data
      console.log("loaded scm-providers : ", this.scmProviders);
    },
    err => console.log(err),
    () => {
      this.isLoading = false;
      console.log("ScmProvider loaded")
      console.log("show-spinner : ", (this.isLoading && !this.errorMessage));
    });
  }

  // onSelect(provider:ScmProvider){
  //   console.log("selected : ", provider.id);
  //   this._router.navigate(['/repositories', provider.id]);
  // }

}
