import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  execute(methode: string, action: any, data: any) {

    return this.http.post(this.baseUrl + methode + '/' + action, data);

  }

}
