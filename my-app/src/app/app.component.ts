import {Component} from '@angular/core';

@Component({
	selector:"pm-root",
	template:`<div><h1>{{pageTitle}}</h1></div>
	<ul class='nav nav-pills'>
	<li><a [routerLink]="['./welcome']">Home</a></li>
	<li><a [routerLink]="['./products']">Product list</a></li>
	<li><a [routerLink]="['./productDetailForm']">Product Details</a></li>
	</ul>	
	<div class='container'>	
		<router-outlet></router-outlet>
	</div>
	`

})

export class AppComponent{	
	pageTitle :string= 'ACME Product Management'
}

