import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello1',
  template: `<h4>Hello {{name}}!</h4>`,
  styles: [`h4 { font-family: Verdana; }`]
})
export class HelloComponent  {
  @Input() name: string ="Angular 5";
}
