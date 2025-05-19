import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Account {
  id?: string;  // optional, if you want to add later
  name: string;
  balance: number;
  // add other fields you expect
}

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private readonly baseUrl =
    'https://expence-tracker-3ad40-default-rtdb.firebaseio.com/accounts.json';

  constructor(private http: HttpClient) {}

  // Get all accounts (returns an object of accounts keyed by id)
  getAccounts(): Observable<{ [key: string]: any }> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Add a new account
  addAccount(account: Account): Observable<any> {
    return this.http.post(this.baseUrl, account);
  }

  // Update an account by id (need the account key)
  updateAccount(id: string, account: Partial<Account>): Observable<any> {
    const url = `https://expence-tracker-3ad40-default-rtdb.firebaseio.com/accounts/${id}.json`;
    return this.http.patch(url, account);
  }

  // Delete an account by id
  deleteAccount(id: string): Observable<any> {
    const url = `https://expence-tracker-3ad40-default-rtdb.firebaseio.com/accounts/${id}.json`;
    return this.http.delete(url);
  }
}
