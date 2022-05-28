import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class APIServicesService {

  constructor(private http: HttpClient) { }

  API_GETTesting<T>(controller: any, method: any) {
    return this.http.get<any>(controller + method);
  }
  API_POSTTesting<T>(controller: any, method: any, data: any) {
    return this.http.post<any>(controller + method, data);
  }
}
