import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/client/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getClientsByAdmin(idadmin:any): Observable<any> {
    return this.http.get(API_URL + 'byadmin/'+idadmin, { responseType: 'text' });
  }
  getAllClients(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  addClient(username: string, password: string, tel: string, idadmin: number): Observable<any> {
    return this.http.post(
      API_URL + 'addClient',
      {
        username, 
        password,
        tel,
        idadmin
      },
      httpOptions
    );
  }
}
