import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'

@Component({
  selector : 'simple',
  template : "Your entered : {{simpleInput}}"

})
export class SimpleComponent implements OnChanges{
  @Input() simpleInput :string;

  ngOnChanges(changes : SimpleChanges){
    for (let propertyName in changes){
        let change = changes[propertyName];
        let current = JSON.stringify(change.currentValue);
        let previousValue = JSON.stringify(change.previousValue);
        console.log("current>>" + current + "  previous >>"+ previousValue)

    }

  } 
}