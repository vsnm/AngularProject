import {Injectable} from '@angular/core';
import {IProduct} from "./product";

@Injectable({
	providedIn:"root"
})
export class ProductService{

	getProducts():IProduct[]{
		return  [
					{
						"productID":2,
						"productName":"Cap",
						"productCode":"GBJ-009",
						"releaseDate":"March 19 2018",
						"description":"Red",
						"price":22.3333,
						"starRating":2,
						"imageUrl":"./assets/iconSample.jpg"

					},
					{
						"productID":3,
						"productName":"Pen",
						"productCode":"PNM-023",
						"releaseDate":"Oct 02 2018",
						"description":"Sharp",
						"price":12.2221,
						"starRating":4,
						"imageUrl":"./assets/iconSample.jpg"
					},
					{
						"productID":4,
						"productName":"Toy",
						"productCode":"PNM-003",
						"releaseDate":"Nov 12 2018",
						"description":"Sharp",
						"price":10.00,
						"starRating":3,
						"imageUrl":"./assets/iconSample.jpg"
					}
				];
	}
}