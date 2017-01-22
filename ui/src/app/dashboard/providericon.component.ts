import {Component, Input, Output} from "@angular/core";
import {LatestBuild} from "./models";

@Component({
  selector: 'provider-icon',
  template: `<i class="fa fa-{{latestBuild.provider}}" aria-hidden="true"></i>`
})
export class ProviderIconComponent{

  @Input() latestBuild: LatestBuild;

}
