import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DashboardService {

    private baseUrl: string = '/ui';
  //private baseUrl: string = '/assets/mock-data/ui';

  constructor(public http: Http){
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapLatestBuilds(response: Response): LatestBuild[] {
  console.log("response: -> ", response);
  //return response.json().results.map(toScmProvider);
  return response.json().map(toLatestBuild)
}

function toLatestBuild(r:any): LatestBuild {
  let latestBuild = <LatestBuild>({
    provider: r.provider,
    orga: r.orga,
    repo: r.repo
  });
  console.log("create latest-builds", latestBuild);
  return latestBuild;
}

export class LatestBuild {
  constructor(
    public provider: string,
    public orga: string,
    public repo: string
  ){}
}
