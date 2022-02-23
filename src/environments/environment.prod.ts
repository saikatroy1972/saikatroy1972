import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
  baseUrl: 'http://115.124.120.251:5056',
  header: new HttpHeaders().set( 'Content-Type', 'application/json').set('Authorization', "Bearer " + localStorage.getItem("token")),
};