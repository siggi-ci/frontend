import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'branches',
  template: `
    <div>
        <h4>Branches</h4>   
    </div>
  `
})
export class BranchesComponent{

  provider:string;
  orga:string;
  name:string;

  constructor(private _activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.provider = this._activatedRoute.snapshot.parent.params['provider'];
    this.orga = this._activatedRoute.snapshot.parent.params['orga'];
    this.name = this._activatedRoute.snapshot.parent.params['name'];
    this.fetchSettings(this.provider, this.orga, this.name);
  }

  fetchSettings(provider:string, orga:string, name:string){
    console.log("fetch BRANCHES for : ", provider, orga, name);
  }
}
