import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators,AbstractControl,ValidatorFn} from '@angular/forms'

function emailMatcher(c:AbstractControl):{[key:string]:boolean} |null{

  const emailControl = c.get('femailAddress');
  const confirmEmailControl = c.get('fConfirmEmailAddress');


if(emailControl.pristine || confirmEmailControl.pristine){
  return null;
}
if(emailControl.value ==confirmEmailControl.value){
  return null;
}
return {'match':true}
}


function ratingRange(min:number, max:number):ValidatorFn{
  return (c:AbstractControl):{[key:string]:boolean} |null =>{
   if(c.value!==null && (isNaN(c.value) || c.value<min || c.value>max)){
     return {'range':true};
  }
   return null;
  }
}

@Component({
  selector: 'app-root',
  //template: '<employee-list></employee-list> <br/> <br/> Your text goes here : <input type="text" [(ngModel)] = "userInput"> <br/><br/> <simple [simpleInput] ="userInput"></simple-->',
  templateUrl: 'app.component.html',
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

  customerForm: FormGroup;
  customerFormBuilder:FormBuilder;
  //Input  n html will bind to this property to display the message
   emailMessages:string;


   private validationMessages={
     //Key pair. Key is the rule name and teh message to displayed
     required:'Please enter your emailAddress',
     email:'Please enter valid emailAddress'
   }

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
applyBlueClass:boolean =true;
constructor(private fb:FormBuilder){

}

//create new instance of the form group
ngOnInit(){
  this.customerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    emailAddress: new FormControl(),
    //set default val
    sendCatalog: new FormControl(true),
  });

  


   this.customerFormBuilder = this.fb.group({
    ffirstName: ['',[Validators.required, Validators.minLength(3)]],
    flastName: ['',[Validators.required, Validators.minLength(3)]],
  
    //set default val
    fsendCatalog: true,
    emailGroup:this.fb.group({
      femailAddress: ['',[Validators.required, Validators.email]],
      fConfirmEmailAddress: ['',Validators.required],
    },{validator:emailMatcher}),
    fphone:'',
    fRating:[null, ratingRange(1,5)],
    notification:'email'

  });
   //Use of watcher -- validation control in componet file instead of the html file.
     this.customerFormBuilder.get('notification').valueChanges.subscribe(
        value => this.setNotification(value)
    )


    //watcher for email address updates
    const emailControl = this.customerFormBuilder.get('emailGroup.femailAddress');
    emailControl.valueChanges.subscribe(
      value => this.setMessages(emailControl)
      )

}

populateData():void{
  this.customerForm.setValue({
    firstName:"Salman",
    lastName:"Khan",
     emailAddress:"test@test.com",
   sendCatalog:false

  })

}

 populatePatchData():void{
  this.customerForm.patchValue({
    firstName:"Shyam",
    lastName:"Rao",   
   sendCatalog:true

  })
 }

setNotification(notifyVia:string):void{
  const phoneControl =this.customerFormBuilder.get('fphone');
if(notifyVia=='text'){
  phoneControl.setValidators(Validators.required);
}else{
  phoneControl.clearValidators();
}
phoneControl.updateValueAndValidity();
}

/*This watcher n react is done to remove the html coding done for validation.
To handle all of this at the component level*/
setMessages(c:AbstractControl):void{
  this.emailMessages='';
  if((c.touched || c.dirty) && c.errors){
    this.emailMessages= Object.keys(c.errors).map(
      key => this.emailMessages += this.validationMessages[key]).join('')
  }

}


//saveForm
save(){

  console.log(this.customerForm);
}

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
