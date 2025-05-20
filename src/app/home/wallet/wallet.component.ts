import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-wallet',
  standalone:true,
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent  implements OnChanges {

  @Input() accountData: any[] = [];
  @Input() totalBalance:any=0;

  constructor(private http : HttpClient, private accountService:AccountsService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['accountData']) {
      console.log('Account data updated:', this.accountData);
    }
  }

  formatCurrency(amount: number, locale: string = 'en-IN', currency: string = 'INR'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2
    }).format(amount);
  }
}
