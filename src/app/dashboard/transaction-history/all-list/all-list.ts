import { Component } from '@angular/core';
import { Transactions } from '../../transactions';
import { Transaction } from '../../../user';

@Component({
  selector: 'app-all-list',
  standalone: false,
  templateUrl: './all-list.html',
  styleUrl: './all-list.css'
})
export class AllList {
  transactionHistoryData: Transaction[] = [];
  accountNumber: string | null = null;

  hoveredIndex: number | null = null;
  onMouseEnter(index: number): void {
    this.hoveredIndex = index;
  }
  onMouseLeave(index: number): void {
    if (this.hoveredIndex === index) {
      this.hoveredIndex = null;
    }
  }

  constructor(private service: Transactions) {
    this.accountNumber = sessionStorage.getItem('accountNumber');
    this.getAllTransactions();    
  }

  getAllTransactions() {
    this.service.getTransactionsByAccountNumber(this.accountNumber || '').subscribe(data => {
      this.transactionHistoryData = data;
    });
  }
}
