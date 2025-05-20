import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone:true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  imports:[CommonModule]
})
export class AccountComponent  implements OnChanges {

  @Input() accountData: any[] = [];


  constructor(private http : HttpClient) { }

  ngOnChanges(changes: SimpleChanges) {
    
  }
  

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  formatCurrency(amount: number, locale: string = 'en-IN', currency: string = 'INR'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2
    }).format(amount);
  }

}
