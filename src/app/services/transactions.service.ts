import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class TransactionsService{

    private readonly baseUrl =
    'https://expence-tracker-3ad40-default-rtdb.firebaseio.com';

    constructor(private http: HttpClient) {}

    getExpenses() : Observable<{ [key: string]: any }> {
        return this.http.get<any[]>(this.baseUrl + "/transactions.json");
    }
}
