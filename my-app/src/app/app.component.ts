import {Component} from '@angular/core';
import {NavComponent} from '/nav';

@Component({
	selector:"pm-root",
	template:`<div><h1>{{pageTitle}}</h1></div><app-nav></app-nav>`

})

export class AppComponent{	
	pageTitle :string= 'ACME Product Management'
}

