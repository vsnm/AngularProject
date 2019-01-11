import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { HttpClientModule} from "@angular/common/http";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [
    AppComponent,   
    WelcomeComponent,
   
  ],
  imports: [
    BrowserModule,    
     RouterModule.forRoot([     
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:"full"},
      {path:'**',redirectTo:'welcome',pathMatch:"full"},
      ]),
     ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
  
 }
