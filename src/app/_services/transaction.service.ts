import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/transactions/';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransactionsByClient(idclient:number): Observable<any> {
    return this.http.get(API_URL + 'byclient/'+idclient, { responseType: 'text' });
  }
 
}
