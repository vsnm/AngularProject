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


@NgModule({
  imports: [  
   BsDatepickerModule.forRoot(), DatepickerModule.forRoot() , TimepickerModule.forRoot() ,
     RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:Id',canActivate: [ProductDetailGuard],component:ProductDetailComponent},
      {path:'productDetailForm',component:ProductFormDetailComponent},
      ]),
     SharedModule,
     HttpModule
  ],
  declarations: [
  	ProductListComponent,
  	ProductDetailComponent,
  	ProductFormDetailComponent,
	ConvertToSpacesPipe,

  ],
    providers: [FormPoster],
})
export class ProductModule { }
