import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chemical } from './chemical.model';
import { SERVER_API_URL } from 'app/app.constants';
import { facility } from './facility.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private http: HttpClient) {}

  listFacilities() {
    return this.http.get<facility[]>(SERVER_API_URL + 'services/facilityservice/facilities/list');
  }

  getFacilityServiceName(): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<string>(SERVER_API_URL + 'services/facilityservice/facilities/service/title', {
      headers,
      responseType: 'text' as 'json'
    });
  }

  // yourFunc(input: any):Observable<string> {
  //     var requestHeader = { headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'No-Auth': 'False' })};
  //     const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  //     return this.http.get<string>(SERVER_API_URL+ '/do-api', { headers, responseType: 'text' as 'json'  });
  //    }
}
