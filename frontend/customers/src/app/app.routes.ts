import { Routes } from '@angular/router';
import { ListCustomersComponent } from './components/listCustomers/listCustomers.component';
import { ViewCustomerComponent } from './components/viewCustomers/viewCustomer.component';
import { CreateCustomerComponent } from './components/createCustomers/createCustomer.component';

export const routes: Routes = [
  { path: '', component: ListCustomersComponent },
  { path: 'view-customer/:id', component: ViewCustomerComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
];
