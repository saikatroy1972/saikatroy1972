import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  public LoginCheck(credential: any){
    return this.http.post(this.baseUrl + "/api/Auth/SignIn", credential);
  }

  public printData(){
    let headers = environment.header;
    return this.http.get(this.baseUrl + "/api/Auth/Users", {headers});
  }

  public getUserData(credential:any ){
    let headers = environment.header;
    return this.http.get(this.baseUrl + "/api/Auth/User/"+credential, {headers});
  }

  public getUserList(){
    let headers = environment.header;
    return this.http.get(this.baseUrl + "/api/Auth/Users", {headers});
  }

  public updateProfile(profile: any){
    let headers = environment.header;
    return this.http.post(this.baseUrl + "/api/Auth/Update", profile, {headers});
  }

  public addProfile(profile: any){
    let headers = environment.header;
    return this.http.post(this.baseUrl + "/api/Auth/User/Add", profile, {headers});
  }

  public getCountry(){
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json')
    return this.http.get(this.baseUrl + "/api/Country/GetCountryDetails", {headers});
  }

  // public getStateList(){
  //   let headers = new HttpHeaders().set( 'Content-Type', 'application/json')
  //   return this.http.get('http://115.124.120.251:5056' + "​/api​/State​/GetAllStateDetails", {headers});
  // }

  public addCountry(country: any){
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json')
    return this.http.post(this.baseUrl + "/api/Country/SaveCountryDetails", country, {headers});
  }

  public updateCountry(country: any){
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json')
    return this.http.post(this.baseUrl + "/api/Country/UpdateCountry", country, {headers});
  }

}
