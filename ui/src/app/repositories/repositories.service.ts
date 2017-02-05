import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {RepositoryInfo} from "./model";

@Injectable()
export class RepositoriesService {

  private baseUrl: string = '/ui/providers';

  constructor(public http: Http){
  }

  getCurrentUser(provider:string) {
    let currentUser = this.http
      .get(`${this.baseUrl}/${provider}/user`, {headers: this.getHeaders()})
      .map(response => {
        console.log("currentUser: ", response);
        return response.json();
      });
    return currentUser;
  }

  getOrgas(provider:string) {
    let organizations = this.http
      .get(`${this.baseUrl}/${provider}/orgas`, {headers: this.getHeaders()})
      .map(response => {
        console.log("organizations: ", response);
        return response.json();
      });
    return organizations;
  }

  getRepoInfo(provider:string){
    let repositories = this.http
      .get(`${this.baseUrl}/${provider}/userrepos`, {headers: this.getHeaders()})
      .map(response => {
        console.log("repos: ", response);
        return response.json();
      });
    return repositories;
  }

  getOrgaRepoInfo(provider:string, orga: string){
    let repositories = this.http
      .get(`${this.baseUrl}/${provider}/repos/${orga}`, {headers: this.getHeaders()})
      .map(response => {
        console.log("repos: ", response);
        return response.json();
      });
    return repositories;
  }

  enableRepository(provider:string,repoInfo: RepositoryInfo): Observable<RepositoryInfo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log("enableRepo : ", repoInfo);
    return this.http.post(`${this.baseUrl}/${provider}/repo/enable`, JSON.stringify(repoInfo), {headers: headers})
      .map((res: Response) => res.json());
  }

  disableRepository(provider:string,repoInfo: RepositoryInfo): Observable<RepositoryInfo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log("diableRepo : ", repoInfo);
    return this.http.post(`${this.baseUrl}/${provider}/repo/disable`, JSON.stringify(repoInfo), {headers: headers})
      .map((res: Response) => res.json());
  }

  private handleError(err: any){
    let erroMsg = err.json().message;
    console.log("error : ", erroMsg);
    return Observable.throw(erroMsg);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
