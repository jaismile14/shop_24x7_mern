import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { CartComponent } from './pages/cart/cart.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { HomeComponent } from './pages/home/home.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { UserordersComponent } from './components/userorders/userorders.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component:  HomeComponent //, canActivate:[LoginGuard]
  },
  {
    path: "home/:id", component:  HomeComponent, //for register no logingaurd here
  },
  {
    path: "departments", component:  DepartmentsComponent, canActivate:[LoginGuard]
  },
  {
    path: "products", component: ProductsComponent, canActivate:[LoginGuard]
  },
  {
    path: "profile", component: ProfileComponent, canActivate:[LoginGuard]
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "product/:id", component:ProductDetailsComponent, canActivate:[LoginGuard]
  },
  {
    path: "productlist/:id", component:ProductListComponent, canActivate:[LoginGuard]
  },
  {
    path: "checkout", component:CheckoutComponent, canActivate:[LoginGuard]
  },
  {
    path: "cart", component:CartComponent, canActivate:[LoginGuard]
  },
  {
    path: "addnewproduct", component:AddNewProductComponent
  },
  {
    path: "manage-orders", component:ManageOrdersComponent
  },
  {
    path: "manage-products", component:ManageProductsComponent
  },
  {
    path: "manage-users", component:ManageUsersComponent
  },
  {
    path: "orders", component:UserordersComponent
  },
  {
    path: "admin", component:AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
