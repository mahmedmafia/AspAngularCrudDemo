import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public service: EmployeeService) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      Position: '',
      EMPCode: '',
      Mobile: ''
    };
  }
  onSubmit(form: NgForm) {
    console.log(form.value.EmployeeID);
    if (form.value.EmployeeID == null) {
      this.insertRecord(form);
    } else {

      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe((data) => {
      this.resetForm(form);
      this.service.refreshList();

    });
  }
  updateRecord(form: NgForm) {
    this.service.updateEmployee(form.value).subscribe((data) => {
      this.resetForm(form);
      this.service.refreshList();

    })
  }
}
