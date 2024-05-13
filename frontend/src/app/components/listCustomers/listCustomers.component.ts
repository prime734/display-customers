import { Component, NgModule, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../../services/customers.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SortPipe } from '../../pipes/sort.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FilterPipe, SortPipe],
  selector: 'app-listCustomers',
  templateUrl: './listCustomers.component.html',
  styleUrls: ['./listCustomers.component.css'],
})
export class ListCustomersComponent implements OnInit {
  searchCustomer = '';
  sortField = '';
  order = '';

  orderArray = ['up', '', '', '', ''];

  flag: number = 1;

  customers: Customer[] = [];
  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customersService.getCustomers().subscribe({
      next: (customers) => {
        this.customers = customers;
      },

      error: (response) => {
        console.log(response);
      },
    });
  }

  goToCreate() {
    this.router.navigate(['create-customer']);
  }

  deleteCustomer(id: string) {
    this.customersService.deleteCustomer(id).subscribe({
      next: (customers) => {
        alert('Deleted successfully.');
      },

      error: (response) => {
        console.log(response);
      },
    });
  }

  updateOrder(index: number) {
    if (this.flag === 1) {
      this.orderArray[index] = 'up';
      this.flag = -1;
    } else if (this.flag === -1) {
      this.orderArray[index] = 'down';
      this.flag = 1;
    }
  }
  handleSort(field: string) {
    this.sortField = field;
    this.orderArray.fill('');
    if (field === 'firstname') this.updateOrder(0);

    if (field === 'surname') this.updateOrder(1);

    if (field === 'email') this.updateOrder(2);

    if (field === 'cellphone') this.updateOrder(3);

    if (field === 'invoiceTotal') this.updateOrder(4);

    for (let i = 0; i < this.orderArray.length; i++) {
      if (this.orderArray[i] !== '') this.order = this.orderArray[i];
    }
  }
}
