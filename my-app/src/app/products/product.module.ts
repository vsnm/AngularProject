import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductFormDetailComponent } from './product-form-detail.component';
import { HttpModule } from "@angular/http";
import { FormPoster } from '../services/form-poster.service';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';
import { ReactiveFormsModule } from '@angular/forms';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';


@NgModule({
  imports: [  
   BsDatepickerModule.forRoot(), DatepickerModule.forRoot() , TimepickerModule.forRoot() ,
   ReactiveFormsModule,
       InMemoryWebApiModule.forRoot(ProductData),
     RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:Id',canActivate: [ProductDetailGuard],component:ProductDetailComponent},
      {path:'productDetailForm',component:ProductFormDetailComponent},
 	 {path:'products/:Id/edit',canDeactivate: [ProductEditGuard],component:ProductEditComponent},

      ]),
     SharedModule,
     HttpModule
  ],
  declarations: [
  	ProductListComponent,
  	ProductDetailComponent,
  	ProductFormDetailComponent,
  	ProductEditComponent,
	ConvertToSpacesPipe,

  ],
    providers: [FormPoster],
})
export class ProductModule { }
