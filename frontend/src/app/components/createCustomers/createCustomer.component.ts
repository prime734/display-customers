import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createCustomer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createCustomer.component.html',
  styleUrls: ['./createCustomer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  createCustomerReq: Customer = {
    id: '',
    firstname: '',
    surname: '',
    email: '',
    cellphone: 0,
    invoiceTotal: 0,
  };
  constructor(
    private customerService: CustomersService,
    private router: Router
  ) {}

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['']);
  }

  createCustomer() {
    this.customerService.createCustomer(this.createCustomerReq).subscribe({
      next: (customer) => {
        alert('Customer created successfully.');
        this.router.navigate(['']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
