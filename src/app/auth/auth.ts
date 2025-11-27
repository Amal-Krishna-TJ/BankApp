import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  isAccountNumberUnique(accountNumber: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?accountNumber=${accountNumber}`);
  }

  login(accountNumber: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?accountNumber=${accountNumber}&password=${password}`);
  }
}
