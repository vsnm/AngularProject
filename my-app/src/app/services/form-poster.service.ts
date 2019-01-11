import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ProductModel} from "../models/product.model";
import {Response, Headers, RequestOptions} from "@angular/http";
import { Observable, throwError } from  'rxjs';
import {map,catchError,delay} from 'rxjs/operators';



@Injectable()
export class FormPoster{

	constructor(private http:Http){
	}

	private extractData(res:Response){
		let body =res.json();
		return body.fields || { };
	}

	private handleError(error : any){
		console.error('post error' , error);
		return Observable.throw(error.statusText);
	}

	private extractLanguages(res:Response){
			let body =res.json();
			return body.data || { };
	}



	getlanguages():Observable<any>{	
		return this.http.get('http://localhost:3100/get-languages').pipe(delay(5000),map(this.extractLanguages),catchError(this.handleError))

	}

	postProductForm(product:ProductModel):Observable<any>{
		let body = JSON.stringify(product);
		let headers = new Headers({'Content-Type' : 'application/json'});
		let options = new RequestOptions({headers: headers})
		console.log("in service ==>")
		return this.http.post('http://localhost:3100/processForm', body, options).pipe(map(this.extractData),catchError(this.handleError))
			
			
	}


}	