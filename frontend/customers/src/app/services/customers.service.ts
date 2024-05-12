import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  baseApiUrl: string = 'https://localhost:7261';
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApiUrl + '/api/customers');
  }
  createCustomer(createCustomerReq:Customer):Observable<Customer>{
    createCustomerReq.id='63019F2B-7AF9-4495-9771-0A5D963068D6'
    return this.http.post<Customer>(this.baseApiUrl + '/api/customers', createCustomerReq)
  }
  getCustomer(id:string):Observable<Customer>{
    return this.http.get<Customer>(this.baseApiUrl + '/api/customers/'+id)
  }

  updateCustomer(id:string, updateCustomerReq:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.baseApiUrl + '/api/customers/'+id,updateCustomerReq)
  }
  deleteCustomer(id:string):Observable<Customer>{
    return this.http.delete<Customer>(this.baseApiUrl + '/api/customers/'+id)
  }
}
