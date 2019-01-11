import {Component} from '@angular/core';
import {IEmployee} from './employee';

@Component ({
  selector: 'employee-list',
  templateUrl : 'employeeList.component.html',
   styleUrls :['employeeList.sass'],
})

export class EmployeeListComponent{
  employees:IEmployee[];
  selectedEmpCountRadioBtn :string ='All';

  constructor(){
    this.employees=[
    {empName:"Salman",designation:"Manager",code:"emp01",annualSalary:100000,dateofJoining:"12/01/2017",gender:"Male"},
     {empName:"Shalini",designation:"HR Manager",code:"emp02",annualSalary:10000,dateofJoining:"08/01/2017",gender:"Female"}, {empName:"Nalini",designation:"Branch Manager",code:"emp03",annualSalary:10000,dateofJoining:"08/01/2017",gender:"Female"},
       {empName:"Malini",designation:"CFO",code:"emp04",annualSalary:10000,dateofJoining:"08/01/2017",gender:"Male"}
    ];

  }
 getAllEmployees():void{
  this.employees=[
    {empName:"Salman",designation:"Manager",code:"emp01",annualSalary:100000,dateofJoining:"08/01/2017",gender:"Male"},
     {empName:"Shalini",designation:"HR Manager",code:"emp02",annualSalary:10000,dateofJoining:"08/01/2017",gender:"Female"},
      {empName:"Nalini",designation:"Branch Manager",code:"emp03",annualSalary:100000,dateofJoining:"08/01/2017",gender:"Female"},
       {empName:"Malini",designation:"CFO",code:"emp04",annualSalary:100000,dateofJoining:"08/01/2017",gender:"Male"}
    ];

 }

 trackByEmployeeCode(indx:number, employees:any):string{
    return employees.code;
 }

  getTotalEmployeeCount():number{
    return this.employees.length;
  }
  getTotalMaleEmployeeCount():number{
    return this.employees.filter(e => e.gender === "Male").length;

  }
  getTotalFemaleEmployeeCount():number{
    return this.employees.filter(e => e.gender === "Female").length;
  }

  onEmpCountRadioBtnChange(selectedRadioButtonValue :string):void{
    this.selectedEmpCountRadioBtn = selectedRadioButtonValue;

  }

}