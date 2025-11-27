import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transactions } from '../transactions';

@Component({
  selector: 'app-credit',
  standalone: false,
  templateUrl: './credit.html',
  styleUrl: './credit.css'
})
export class Credit {
  creditForm: FormGroup;
  transactionAmount: number = 0;
  accountNumber: string = '';

  constructor(private fb: FormBuilder, private service: Transactions) {
    this.creditForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onCredit() {
    this.accountNumber = sessionStorage.getItem('accountNumber') || '';
    console.log(this.accountNumber);

    const { amount } = this.creditForm.value;

    this.service.getTransactionAmount().subscribe(data => {
      this.transactionAmount = Number(data.length);
    });

    this.service.getUser(this.accountNumber).subscribe(users => {
      if (users.length > 0) {
        console.log("if worked");
        const user = users[0];
        user.balance = (user.balance || 0) + Number(amount);

        this.service.updateUser(user.id, user).subscribe(() => {
          const transaction = {
            id: this.transactionAmount + 1,
            accountNumber: Number(this.accountNumber),
            type: 'CREDIT',
            amount: Number(amount),
            balance: user.balance,
            date: new Date().toISOString()
          };

          this.service.recordTransaction(transaction).subscribe(() => {
            alert(`₹${amount} credited successfully!`);
            this.creditForm.reset();
          });
        });
      } else {
        alert('Account number not found.');
      }
    });
  }
}
