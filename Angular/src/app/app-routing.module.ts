import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/order/product-details/product-details.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ApiProductComponent } from './Components/order/Products/api-product/api-product.component';
import { NewProductComponent } from './Components/order/Products/new-product/new-product.component';
import { LoginComponent } from './Components/User/login/login.component';
import { UpdateProductComponent } from './Components/order/Products/update-product/update-product.component';
import { RegistrationComponent } from './Components/User/registration/registration.component';
import { AddtochartComponent } from './Components/order/Products/addtochart/addtochart.component';
import { UploadimageComponent } from './Components/order/Products/uploadimage/uploadimage.component';
import { EditProComponent } from './Components/order/Products/edit-pro/edit-pro.component';
import { AdminProductComponent } from './Components/order/Products/admin-product/admin-product.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Product',component:OrderMasterComponent},
  {path:'ApiProducts',component:ApiProductComponent},
  {path:'AddProduct',component:UploadimageComponent},
 // {path:'Edit/:pid',component:UpdateProductComponent},
 {path:'Admin',component:AdminProductComponent},
  {path:'edit/:pid',component:EditProComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'Product/:pid',component:ProductDetailsComponent},
  { path: 'cart', component:AddtochartComponent },
  {path:'',redirectTo:'/ApiProducts',pathMatch:'full'},
   {path:'**',component:PageNotFoundComponent},
   

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
