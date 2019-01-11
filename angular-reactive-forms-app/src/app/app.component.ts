import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<employee-list></employee-list> <br/> <br/> Your text goes here : <input type="text" [(ngModel)] = "userInput"> <br/><br/> <simple [simpleInput] ="userInput"></simple>',
  styleUrls: [ './app.component.sass' ]  
})
export class AppComponent  {
  name : string= 'Angular 5';
  type : string= 'Angular 5!!!';
  pageHeader : string='Employee Details';
  commonHeader:string = 'Angular Examples';
   //property binding examples 
  isDisabled : boolean = false;
  //Interpolation examples
  firstName :string ="Tom";
  lastName :string ="Alter";
  gender : string ='M';
  age : string ='30';

//simpleComponent Example for component lifecyclc ngChanges, ngOnInit, ngDestroy
userInput : string;

//Angular Sanitize
badHTML :string ="Hello pppp<script>alert('hii')</script>"

//Class Binding example override exsting class
actionBtn:string ="boldClass blueActionBtn"

//Style binding
isBold :boolean =true;
fontSize : number =24;
//Class Binding example override any one specific exsting class
applyBoldClass:boolean =true

//Class Binding overide any one class
applyBlueClass:boolean =true

//Event binding
  showDetails: boolean = false;
  getFullName(){
    return this.firstName + ' '+ this.lastName;

  }

  addClasses(){
   let classes = {
        boldClass :this.applyBoldClass, 
        blueActionBtn :this.applyBlueClass, 
  };

  return classes;
  }

   addStyles(){
    let styles = {
          'font-weight' : this.isBold ? 'bold' : 'normal', 
          'font-size.px' :this.fontSize,
    };
    return styles;
  }

  callClickFunc():void{
    alert("hello i m clicked!!!")
  }  

 toggleDetails():void{  
    this.showDetails = !this.showDetails;    
  } 

 }
