import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "customTitlePipe"
})

export class CustomPipe implements PipeTransform{

  transform(value:string, gender:string):string{
    if(gender.toLowerCase()=='male'){
        return 'Mr. ' + value;
    }else{
        return 'Mrs. ' + value;
    }


  }


}