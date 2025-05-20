import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  standalone:true,
  imports: [CommonModule]
})
export class TransactionsComponent  implements OnInit {

  expenseData:any[]=[];
  recentTransactions:any[]=[];

  constructor(private transactionsService : TransactionsService) { }

  ngOnInit() {
    this.transactionsService.getExpenses().subscribe((data) => {
      this.expenseData = Object.entries(data).map(([id, acc]) => ({
        id,
        ...acc
      }));
      this.recentTransactions = this.expenseData.sort((a, b) => b.timeInMillis - a.timeInMillis).slice(0,5);
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
