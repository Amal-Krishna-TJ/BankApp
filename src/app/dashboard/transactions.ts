import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class Transactions {
  private apiUrl = "http://localhost:3000/users";
  private transactionsUrl = "http://localhost:3000/transactions";

  constructor(private http: HttpClient) {}

  getUser(accountNumber: string): Observable<any> {
    return this.http.get<User[]>(`${this.apiUrl}?accountNumber=${accountNumber}`);
  }

  updateUser(id: number, data: User): Observable<any> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, data);
  }

  recordTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.transactionsUrl, transaction);
  }

  getTransactionAmount(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  getTransactionsByAccountNumber(accountNumber: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.transactionsUrl}?accountNumber=${accountNumber}`);
  }
}
