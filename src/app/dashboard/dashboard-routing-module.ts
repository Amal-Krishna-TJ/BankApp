import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Credit } from './credit/credit';
import { Debit } from './debit/debit';
import { authGuard } from '../guards/auth-guard';
import { TransactionHistory } from './transaction-history/transaction-history';
import { AllList } from './transaction-history/all-list/all-list';
import { CreditList } from './transaction-history/credit-list/credit-list';
import { DebitList } from './transaction-history/debit-list/debit-list';

const routes: Routes = [
  { 
    path: '', component: Dashboard, canActivate: [authGuard],
    children: [
      { path: 'credit', component: Credit },
      { path: 'debit', component: Debit },
      { path: 'transactions', component: TransactionHistory,
        children: [
          { path: "all", component: AllList },
          { path: 'credit', component: CreditList },
          { path: 'debit', component: DebitList },
          { path: '', redirectTo: 'all', pathMatch: 'full' }
        ]},
      { path: '', redirectTo: 'credit', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
