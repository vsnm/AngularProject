import {Injectable} from '@angular/core';
import {IProduct} from "./product";

import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
	providedIn:"root"
})
export class ProductService{
private productsUrl = 'api/products';

 constructor(private http: HttpClient) { }

 /* getProducts(): Observable<IProduct[]> {
  	console.log("data>>>>>" + this.productsUrl);
    return this.http.get<IProduct[]>(this.productsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(this.getProductsData()))),
        catchError(this.handleError)
      );
  }*/

  getProduct(id: number): Observable<IProduct> {
  	console.log(id)
    if (id === 0) {
      return of(this.initializeProduct());
    }

    return this.getProducts[0]
    /*const url = `${this.productsUrl}/${id}`;
    return this.http.get<IProduct>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );*/
  }

  createProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product.id = null;
    return this.http.post<IProduct>(this.productsUrl, product, { headers: headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<IProduct>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put<IProduct>(url, product, { headers: headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeProduct(): IProduct {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: ['test'],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null


    };
  }

	getProducts():IProduct[]{
		return  [
					{
						"id":2,
						"productName":"Cap",
						"productCode":"GBJ-009",
						"tags": [''],
						"releaseDate":"March 19 2018",
						"description":"Red",
						"price":22.3333,
						"starRating":2,
						"imageUrl":"./assets/iconSample.jpg"

					},
					{
						"id":3,
						"productName":"Pen",
						"productCode":"PNM-023",
							"tags": [''],
						"releaseDate":"Oct 02 2018",
						"description":"Sharp",
						"price":12.2221,
						"starRating":4,
						"imageUrl":"./assets/iconSample.jpg"
					},
					{
						"id":4,
						"productName":"Toy",
						"productCode":"PNM-003",
							"tags": [''],
						"releaseDate":"Nov 12 2018",
						"description":"Sharp",
						"price":10.00,
						"starRating":3,
						"imageUrl":"./assets/iconSample.jpg"
					}
				];
	}
}