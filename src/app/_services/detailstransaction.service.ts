import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/detailstrans/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getDetailsTransbyclient(idclient:any): Observable<any> {
    return this.http.get(API_URL + 'byclient/'+idclient, { responseType: 'text' });
  }
  getAllDetailsTrans(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  addDetailsTrans(produitachete: string, montant: string): Observable<any> {
    return this.http.post(
      API_URL + 'addDetailsTrans',
      {
        produitachete, 
        montant
      },
      httpOptions
    );
  }
}
