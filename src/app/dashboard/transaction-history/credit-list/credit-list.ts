import { Component } from '@angular/core';
import { Transaction } from '../../../user';
import { Transactions } from '../../transactions';

@Component({
  selector: 'app-credit-list',
  standalone: false,
  templateUrl: './credit-list.html',
  styleUrl: './credit-list.css'
})
export class CreditList {
  transactionHistoryData: Transaction[] = [];
  accountNumber: string | null = null;

  constructor(private service: Transactions) {
    this.accountNumber = sessionStorage.getItem('accountNumber');
    this.getCreditTransactions();
  }

  hoveredIndex: number | null = null;
  onMouseEnter(index: number): void {
    this.hoveredIndex = index;
  }
  onMouseLeave(index: number): void {
    if (this.hoveredIndex === index) {
      this.hoveredIndex = null;
    }
  }

  getCreditTransactions() {
    this.service.getTransactionsByAccountNumber(this.accountNumber || '').subscribe(data => {
      this.transactionHistoryData = data.filter(transaction => transaction.type === 'CREDIT');
    });
  }
}
