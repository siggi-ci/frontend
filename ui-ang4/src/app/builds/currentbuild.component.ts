import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'current',
  template: `
    <div>
        <h3>Present the current Build here</h3>
        <h4>Slots</h4>
        <table>
            <tr>
                <td># 12.1</td>
                <td>ENV_NAME</td>
                <td>3:12</td>
            </tr>
            <tr>
                <td># 12.2</td>
                <td>ENV_NAME</td>
                <td>3:35</td>
            </tr>
        </table>
    </div>
  `
})
export class CurrentBuildComponent implements OnInit {

  provider: string;
  orga: string;
  name: string;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.provider = this._activatedRoute.snapshot.parent.params['provider'];
    this.orga = this._activatedRoute.snapshot.parent.params['orga'];
    this.name = this._activatedRoute.snapshot.parent.params['name'];
    // this.fetchLatestBuild(this.provider, this.orga, this.name);
    // because 'ngOnInit' is only called once, we register to listen when the
    // param changed, otherwise on events when user clicks for another orga

    this._activatedRoute.params.subscribe(d => {
      const orga = d['orga'];
      const provider = d['provider'];
      const name = d['name'];

      this.fetchLatestBuild(provider, orga, name);
    });
  }

  fetchLatestBuild(provider: string , orga: string, name: string) {
    this.provider = provider;
    this.orga = orga;
    this.name = name;
    console.log('fetch LATEST_BUILD for : ', this.provider, this.orga, this.name);
  }
}
