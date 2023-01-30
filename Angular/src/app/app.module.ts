import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './Components/content/content.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavComponent } from './Components/nav/nav.component';

import { UsdtoegpPipe } from './pipes/usdtoegp.pipe';
import { HighlightDirective } from './Direvtives/highlight.directive';
import { OrderDetailsComponent } from './Components/order/order-details/order-details.component';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/order/product-details/product-details.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ApiProductComponent } from './Components/order/Products/api-product/api-product.component';
import { NewProductComponent } from './Components/order/Products/new-product/new-product.component';
import { LoginComponent } from './Components/User/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { UpdateProductComponent } from './Components/order/Products/update-product/update-product.component';
import { RegistrationComponent } from './Components/User/registration/registration.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AddtochartComponent } from './Components/order/Products/addtochart/addtochart.component';
import { UploadimageComponent } from './Components/order/Products/uploadimage/uploadimage.component';
import { EditProComponent } from './Components/order/Products/edit-pro/edit-pro.component';
import { AdminProductComponent } from './Components/order/Products/admin-product/admin-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
   
    UsdtoegpPipe,
    HighlightDirective,
    OrderDetailsComponent,
    OrderMasterComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    ApiProductComponent,
    NewProductComponent,
    LoginComponent,
  
    UpdateProductComponent,
  
    RegistrationComponent,
  
    AddtochartComponent,
  
    UploadimageComponent,
  
    EditProComponent,
  
    AdminProductComponent
  ],
  imports: [
   
   
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'dark', 
      
    
    }),

    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
