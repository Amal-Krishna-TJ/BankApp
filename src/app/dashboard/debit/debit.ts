import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transactions } from '../transactions';

@Component({
  selector: 'app-debit',
  standalone: false,
  templateUrl: './debit.html',
  styleUrl: './debit.css'
})
export class Debit {
  debitForm: FormGroup;
  transactionAmount: number = 0;
  accountNumber: string | null = null;

  constructor(private fb: FormBuilder, private service: Transactions) {
    this.debitForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onDebit() {
    this.accountNumber = sessionStorage.getItem('accountNumber') || '';

    const { amount } = this.debitForm.value;

    this.service.getTransactionAmount().subscribe(data => {
      this.transactionAmount = Number(data.length);
    });

    this.service.getUser(this.accountNumber).subscribe(users => {
      if (users.length > 0) {
        const user = users[0];

        if ((user.balance || 0) >= Number(amount)) {
          user.balance -= Number(amount);

          this.service.updateUser(user.id, user).subscribe(() => {
            const transaction = {
              id: this.transactionAmount + 1,
              accountNumber: Number(this.accountNumber),
              type: 'DEBIT',
              amount: Number(amount),
              balance: user.balance,
              date: new Date().toISOString()
            };

            this.service.recordTransaction(transaction).subscribe(() => {
              alert(`₹${amount} debited successfully!`);
              this.debitForm.reset();
            });
          });
        } else {
          alert('Insufficient balance.');
        }
      } else {
        alert('Account number not found.');
      }
    });
  }
}
