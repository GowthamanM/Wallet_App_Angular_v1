import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  standalone:true,
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent  implements OnInit {

  private accountsUrl = 'https://expence-tracker-3ad40-default-rtdb.firebaseio.com/accounts.json';

  accountData: any[] = [];
  totalBalance:any=0;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.accountsUrl).subscribe({
      next: (response) => {
        this.accountData = response;
        console.log( response);
        this.totalBalance = Object.values(this.accountData).reduce((sum, account) => sum + account.balance, 0);
      },
      error: (error) => {
        console.error(error);
      }
    });
    
  }

  formatCurrency(amount: number, locale: string = 'en-IN', currency: string = 'INR'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2
    }).format(amount);
  }
}
