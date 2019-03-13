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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';



@NgModule({
  declarations: [
    AppComponent,   
    WelcomeComponent, NavComponent, DashboardComponent, CustomerListComponent,
   
  ],
  imports: [
    BrowserModule,HttpClientModule,    
     RouterModule.forRoot([     
      {path:'welcome',component:WelcomeComponent},
        {path:'dashboard',component:DashboardComponent},
          {path:'customer-list',component:CustomerListComponent},
      {path:'',redirectTo:'welcome',pathMatch:"full"},
      {path:'**',redirectTo:'welcome',pathMatch:"full"},
      ]),
     ProductModule,
     BrowserAnimationsModule,
     LayoutModule,
     MatToolbarModule,
     MatButtonModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule,
     MatGridListModule,
     MatCardModule,
     MatMenuModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
  
 }
