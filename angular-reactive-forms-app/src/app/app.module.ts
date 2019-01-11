import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employeeApp/employee.components';
import { EmployeeListComponent } from './employeeApp/employeeList.component';
import { EmployeeCountComponent } from './employeeApp/employeeCount.component';
import { CustomPipe } from './employeeApp/customPipe';
import { SimpleComponent } from './Others/simple.components';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,EmployeeComponent,EmployeeListComponent, EmployeeCountComponent,CustomPipe, SimpleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }