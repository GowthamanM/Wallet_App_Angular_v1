import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WalletComponent } from './wallet/wallet.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HttpClient } from '@angular/common/http';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WalletComponent, AccountComponent, TransactionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  accountData: any[] = [];
  totalBalance:any=0;

  constructor(private http : HttpClient, private accountService:AccountsService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe((data) => {
      this.accountData = Object.entries(data).map(([id, acc]) => ({
        id,
        ...acc
      }));
      console.log(this.accountData);
      this.totalBalance = Object.values(this.accountData).reduce((sum, account) => sum + account.balance, 0);
    });
  }

}
