import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
	selector:"pm-products",
	templateUrl:"./product-list.component.html",
	styleUrls:["./product-list.component.css"]
})

export class ProductListComponent implements OnInit{
	pageTitle :string ="Product list";
	imgWidth :number =50;
	showImage :boolean = true;
	filteredProducts:IProduct[];

	onRatingClicked(message:string):void{
		this.pageTitle= "Product List :" + message;
	}

	products:IProduct[] =[];


	toggleImage():void{
		this.showImage = !this.showImage;

	}

	ngOnInit():void{
		console.log('In OnInit');
		this.products= this.productService.getProducts();
		this.filteredProducts = this.products;
		//this.listFilter='pen';
	}

	_listFilter:string;

	get listFilter():string{
		return this._listFilter;
	}

	set listFilter(value:string){
		this._listFilter= value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;

	}

	constructor( private productService :ProductService){
		

	}

	performFilter(filterBy:string):IProduct[]{
		filterBy = filterBy.toLocaleLowerCase();
		console.log('in perform')
		return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1) }

}