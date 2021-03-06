import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'pullrequests',
  template: `
    <div>
        <h3>Settings</h3>   
    </div>
  `
})
export class SettingsComponent implements OnInit {

  provider: string;
  orga: string;
  name: string;

  constructor(private _activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.provider = this._activatedRoute.snapshot.parent.params['provider'];
    this.orga = this._activatedRoute.snapshot.parent.params['orga'];
    this.name = this._activatedRoute.snapshot.parent.params['name'];
    this.fetchSettings(this.provider, this.orga, this.name);
  }

  fetchSettings(provider: string, orga: string, name: string) {
    console.log('fetch SETTINGS for : ', provider, orga, name);
  }
}
