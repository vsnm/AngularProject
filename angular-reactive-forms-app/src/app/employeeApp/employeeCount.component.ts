import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({

  selector:'employee-count',
  templateUrl :'employeeCount.html'

})

export class EmployeeCountComponent {
selectedRabioBtnval : string = 'All';

  @Output()
  //For Custom event creation use EventEmitter
  countRadiobuttonSelectionChange : EventEmitter<string> = new EventEmitter<string>();

    @Input()
    //To make a property an inpit property decorate it with @Input decorator
    all :number;
    
    @Input()
    male :number;
    
    @Input()
    female :number;
//<tr *ngFor="let employee of employees;trackBy:trackByEmployeeCode;let i=index;let isFirst=first;let isLast=last;let isEven =even;let isOdd=odd">


 onRadioButtonChange(){
   //Use emit method to raise the event
   this.countRadiobuttonSelectionChange.emit(this.selectedRabioBtnval)
 }

}