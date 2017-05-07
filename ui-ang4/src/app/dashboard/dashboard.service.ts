import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {LatestBuild} from './models';

@Injectable()
export class DashboardService {

  private baseUrl = '/ui';

  constructor(public http: Http){
  }

  getLatestBuilds() {
    const latestBuilds = this.http.get(`${this.baseUrl}/dashboard/latest`, {headers: this.getHeaders()})
      .map(response => {
        return response.json();
      });
    return latestBuilds;
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapLatestBuilds(response: Response): LatestBuild[] {
  console.log('response: -> ', response);
  // return response.json().results.map(toScmProvider);
  return response.json().map(toLatestBuild);
}

function toLatestBuild(r: any): LatestBuild {
  const latestBuild = <LatestBuild>({
    provider: r.provider,
    orga: r.orga,
    repo: r.repo
  });
  console.log('create latest-builds', latestBuild);
  return latestBuild;
}

