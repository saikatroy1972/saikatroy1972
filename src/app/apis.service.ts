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

}
