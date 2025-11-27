import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { Credit } from './credit/credit';
import { Debit } from './debit/debit';
import { TransactionHistory } from './transaction-history/transaction-history';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatFormField, MatLabel } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllList } from './transaction-history/all-list/all-list';
import { CreditList } from './transaction-history/credit-list/credit-list';
import { DebitList } from './transaction-history/debit-list/debit-list';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    Dashboard,
    Credit,
    Debit,
    TransactionHistory,
    AllList,
    CreditList,
    DebitList
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavContent,
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([]),
    FontAwesomeModule
]
})
export class DashboardModule { }
