import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm: FormGroup;
  isBalanceVisible: boolean = false;
  userLength: number = 0;

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.auth.getUser().subscribe((users) => {
      this.userLength = users.length + 1;

    });
    this.registerForm = fb.group({
      accountNumber: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      balance: ['']
    });
  }

  register() {
    if(this.registerForm.invalid) {
      return;
    }
    
    const accountNumber = this.registerForm.value.accountNumber;

    this.auth.isAccountNumberUnique(accountNumber).subscribe((users) => {
      if(users.length > 0) {
        alert('Account number already exists!');
      } else {
        const userRegisterData = {
          id: this.userLength,
          accountNumber: Number(this.registerForm.value.accountNumber),
          name: this.registerForm.value.name,
          password: this.registerForm.value.password,
          email: this.registerForm.value.email,
          balance: Number(this.registerForm.value.balance)
        }
        this.auth.registerUser(userRegisterData).subscribe(() => {
          alert('Registeration successful!');
          this.router.navigate(['auth/login']);
          this.isBalanceVisible = false;
        })
      }
    })
  }

  popUp() {
    this.isBalanceVisible = true;
  }
}
