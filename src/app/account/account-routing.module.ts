import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountBaseComponent } from './account-base/account-base.component';

const routes: Routes = [
  {
    path: '',
    component: AccountBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
