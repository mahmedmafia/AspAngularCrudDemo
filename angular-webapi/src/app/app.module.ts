import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
