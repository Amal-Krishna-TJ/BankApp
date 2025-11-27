import { Component } from '@angular/core';
import { Transactions } from '../transactions';
import { Transaction } from '../../user';

@Component({
  selector: 'app-transaction-history',
  standalone: false,
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css'
})
export class TransactionHistory {
  currentBalance: number = 0;
  accountNumber: string | null = null;

  constructor(private service: Transactions) {
    this.accountNumber = sessionStorage.getItem('accountNumber');
    this.getAmount();
  }

  getAmount() {
    this.service.getUser(this.accountNumber || '').subscribe(data => {
      this.currentBalance = data[0]?.balance || 0;
    });
  }
}
