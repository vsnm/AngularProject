import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ProductModel} from '../models/product.model';
import {HttpModule} from "@angular/http";
import {FormPoster} from '../services/form-poster.service';




@Component({
  selector: 'app-product-form-detail',
  templateUrl: './product-form-detail.component.html',
  styleUrls: ['./product-form-detail.component.css']
})
export class ProductFormDetailComponent implements OnInit {

	languages = [];
	models = new ProductModel('Michael','Jackson',true,"Pen","default");
	hasPrimaryLanguageError=false;

	 bsValue = new Date();
 	 bsRangeValue: Date[];
	 maxDate = new Date();
	 mytime: Date = new Date();
 

	  constructor(private formPoster:FormPoster) { 
	  	console.log('FormPoster Initiated');
		this.formPoster.getlanguages()
  				.subscribe(
  					data=>this.languages = data.languages,
  					err=>console.log('get error : ', err)
  					)

  		this.maxDate.setDate(this.maxDate.getDate() + 7);
   		 this.bsRangeValue = [this.bsValue, this.maxDate];

	  }
 

	  ngOnInit() {

	  }

	  lastNametoUpperCase(value:string){
		if(value.length>0)
			this.models.lastName = value.charAt(0).toUpperCase() + value.slice(1);
		else
			this.models.lastName = value;
	  }

	  validatePrimaryLanguage(event){
		  	console.log(this.models.primaryLanguages)
		  	if(this.models.primaryLanguages=="default"){
		  		this.hasPrimaryLanguageError=true;
		   	}else{
		   		this.hasPrimaryLanguageError=false;
		   	}
  		}



  		submitForm(form:NgForm){
  			this.validatePrimaryLanguage(this.models.primaryLanguages);
  			if(this.hasPrimaryLanguageError){
  				return;
  			}


  			this.formPoster.postProductForm(this.models)
  				.subscribe(
  					data=>console.log('success : ', data),
  					err=>console.log('error : ', err)
  					)

			console.log(this.models);
  			console.log(form.value);
  			console.log(this.formPoster.postProductForm(this.models));

  		}


  			
 }


