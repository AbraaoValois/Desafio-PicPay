import { importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list';
import { PaymentModalComponent } from './components/payment-modal/payment-modal';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'payment', component: PaymentModalComponent },
];

export const appRouting = [
  provideRouter(routes),
  importProvidersFrom(RouterModule)
];
