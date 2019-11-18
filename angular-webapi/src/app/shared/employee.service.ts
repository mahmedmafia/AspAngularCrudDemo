import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  private readonly rootUrl = "http://localhost:59151/api";
  private readonly empUrl = this.rootUrl + "/Employee";
  constructor(private http: HttpClient) { }
  postEmployee(formData: Employee) {
    return this.http.post(this.empUrl, formData);
  }
  refreshList() {
    this.http.get(this.empUrl).toPromise().then((result) => {
      this.list = result as Employee[];
    }).catch((err) => {
      console.log(err);
    });
  }
  updateEmployee(formData: Employee) {
    // this.list.map((emp) => {
    //   if (emp.EmployeeID == formData.EmployeeID) { emp = formData; }
    // });
    return this.http.put(this.empUrl + '/' + formData.EmployeeID, formData);
  }
  deleteEmployee(id: number) {
    return this.http.delete(this.empUrl + '/' + id);
  }
}
