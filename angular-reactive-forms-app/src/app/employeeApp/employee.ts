export interface IEmployee{
    empName:string;
    designation:string;
    code:string;
    annualSalary:number;
    gender:string;
    dateofJoining:string;

    computeMonthlySalary(annualSalary:number):number
  }

//Class implementing Interface needs to implement all the property and methods mentioned in Interface
  export class Employee implements IEmployee{

      constructor(public empName :string, public designation:string,  public code:string, public annualSalary:number,  public gender:string, public dateofJoining:string,){

    }

    computeMonthlySalary(annualSalary:number){
      return annualSalary/12;
    }

  }