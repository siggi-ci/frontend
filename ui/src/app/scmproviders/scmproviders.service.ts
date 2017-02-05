import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {ScmProvider} from "./model";

@Injectable()
export class ScmProviderService {

  private baseUrl: string = '/ui';

  constructor(public http: Http){
  }

  getScmProviders(): Observable<ScmProvider[]> {
    let scmProviders = this.http
      .get(`${this.baseUrl}/scmproviders`, {headers: this.getHeaders()})
      .map(response => {
        console.log("", response);
        return response.json();
      });
    return scmProviders;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
