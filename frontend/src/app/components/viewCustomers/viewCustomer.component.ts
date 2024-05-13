import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-viewCustomer',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './viewCustomer.component.html',
  styleUrls: ['./viewCustomer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customerInfo:Customer = {
    id:'',
    firstname:'',
    surname:'',
    email:'',
    cellphone:0,
    invoiceTotal:0
  }

  constructor(private route:ActivatedRoute, private customerService:CustomersService, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id')
        if(id){
          this.customerService.getCustomer(id)
          .subscribe({
            next:(response)=>{
              this.customerInfo = response
            }
          })
        }
      }
    })
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.customerInfo.id, this.customerInfo)
    .subscribe({
      next:(response)=>{
        alert('Customer details updated successfully.')
        this.router.navigate([''])
      }
    })
  }

  deleteCustomer(id:string){
    this.customerService.deleteCustomer(this.customerInfo.id)
    .subscribe({
      next:(response)=>{
        alert('Customer deleted successfully.')
        this.router.navigate([''])
      }
    })
  }
  
  goToHome(){
    this.router.navigate([''])
  }

}
