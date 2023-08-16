import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chemical } from './chemical.model';
import { SERVER_API_URL } from 'app/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChemicalService {
  constructor(private http: HttpClient) {}

  loadChemicalByCas(cas: string): Observable<chemical> {
    return this.http.get<chemical>(SERVER_API_URL + 'services/chemicalsearch/chemicals/' + cas);
  }

  getChemicalServiceName(): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<string>(SERVER_API_URL + 'services/chemicalsearch/chemicals/service/title', {
      headers,
      responseType: 'text' as 'json'
    });
  }

  getFeatures(): Observable<string[]> {
    return this.http.get<string[]>(SERVER_API_URL + 'services/chemicalsearch/chemicals/features');
  }
}
