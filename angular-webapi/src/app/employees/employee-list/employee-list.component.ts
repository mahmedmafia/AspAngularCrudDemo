import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service: EmployeeService) { }


  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }
  onDelete(EmployeeID: number) {
    if (confirm("are you sure You want to Delete this record")) {
      this.service.deleteEmployee(EmployeeID).subscribe((res) => {
        console.log(res);
        console.log('Deleted')
        this.service.refreshList();
      });
    }
  }
}
