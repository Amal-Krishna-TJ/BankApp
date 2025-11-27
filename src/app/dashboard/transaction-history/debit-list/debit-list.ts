import { Component } from '@angular/core';
import { Transactions } from '../../transactions';
import { Transaction } from '../../../user';

@Component({
  selector: 'app-debit-list',
  standalone: false,
  templateUrl: './debit-list.html',
  styleUrl: './debit-list.css'
})
export class DebitList {
  transactionHistoryData: Transaction[] = [];
  accountNumber: string | null = null;

  constructor(private service: Transactions) {
    this.accountNumber = sessionStorage.getItem('accountNumber');
    this.getDebitTransactions();
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

  getDebitTransactions() {
    this.service.getTransactionsByAccountNumber(this.accountNumber || '').subscribe(data => {
      this.transactionHistoryData = data.filter(transaction => transaction.type === 'DEBIT');
    });
  }
}
