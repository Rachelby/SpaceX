import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {
  
  private baseUrl = 'https://api.spacexdata.com/v2';

  constructor(public http: HttpClient) {

  }

  // Récuperer liste des prochains lancements 
  getNextLaunches() : Observable<Launch[]>{
    const endpointUrl = `${this.baseUrl}/launches/upcoming`;
    return this.http.get<Launch[]>(endpointUrl);
  }

  // Récuperer les détails du prochain lancement 
  getNextLaunch() : Observable<Launch>{
   const endpointUrl = `${this.baseUrl}/launches/next`;
    console.log(endpointUrl);
    return this.http.get<Launch>(endpointUrl);
  }

  // Récuperer tous les lancements 
  getAllLaunches(): Observable<any> {
    const endpointUrl = `${this.baseUrl}/launches/all`;
    return this.http.get<Observable<any>>(endpointUrl);
  }

  // Recuperer détails d'un lancement 
  getLaunch(id : string): Observable<any> {
    const endpointUrl = `${this.baseUrl}/launches/all?flight_number=${id}`;
    console.log(endpointUrl);
    return this.http.get<Observable<any>>(endpointUrl);
  }

  // Recuperer la liste des rockets
  getAllRockets(): Observable<any> {
    const endpointUrl = `${this.baseUrl}/rockets`;
    console.log(endpointUrl);
    return this.http.get<Observable<any>>(endpointUrl);
  }
  
  // Recuperer détails d'une rocket
  getRocket(name : string): Observable<any> {
    const endpointUrl = `${this.baseUrl}/rockets/${name}`;
    console.log(endpointUrl);
    return this.http.get<Observable<any>>(endpointUrl);
  }

  // Récuperer les informations de SpaceX
  getInfoSpaceX() : Observable<any> {
    const endpointUrl = `${this.baseUrl}/info`;
    console.log(endpointUrl);
    return this.http.get<Observable<any>>(endpointUrl);
  }

  getCapsule(name : string) : Observable<any> {
    const endpointUrl = `${this.baseUrl}/capsules/${name}`;
    console.log(endpointUrl);
    return this.http.get<Observable<any>>(endpointUrl);
  }

}