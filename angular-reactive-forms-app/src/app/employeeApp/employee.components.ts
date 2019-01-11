import { Component } from '@angular/core';

@Component({
  selector :'my-employee',
  templateUrl : 'employee.component.html',

})

export class EmployeeComponent{
  firstName : string ='Tom';
  lastName : string ='Alter';
  gender : string ='M';
  age : string ='30';
  columnSpan: number =2;

}