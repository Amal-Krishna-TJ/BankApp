import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.loginForm = this.fb.group({
      accountNumber: ['', Validators.required],
      password: ['', Validators.required],
      name: ['',[Validators.required]]
    });
  }

  login() {
    if(this.loginForm.invalid) {
      return;
    }

     const { accountNumber, password } = this.loginForm.value;

     this.auth.login(accountNumber, password).subscribe((users) => {
      if(users.length > 0) {
        const user = users[0];
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        localStorage.setItem('authToken', btoa(`${user.accountNumber}:${user.password}`));
        alert('Login successful!');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid account number or password!');
      }
     })
     sessionStorage.setItem('accountNumber', this.loginForm.value.accountNumber);
  }
}