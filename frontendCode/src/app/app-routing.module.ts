import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TransactionLogComponent} from './transaction-log/transaction-log.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'transaction', component: TransactionLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
