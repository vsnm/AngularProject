import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct} from './product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle:string= "Product Detail";
product:IProduct;

  constructor(private route:ActivatedRoute, private router:Router) { 
  	console.log(this.route.snapshot.paramMap.get('Id'));
  }

  ngOnInit() {
  	let id=this.route.snapshot.paramMap.get('Id');
  	this.pageTitle += id;

  	this.product = {
  		'id':99,
  		'productName':'Cap',
  		'productCode':'999',
  		"releaseDate":"March 19 2018",
		"description":"Red",
		"price":22.3333,
		"starRating":2,
		"imageUrl":"./assets/iconSample.jpg",
		"tags":['testtt']
  	}


  }

  onBack():void{
this.router.navigate(['/products']);

  }

}
