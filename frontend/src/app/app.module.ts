import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeWelcomeComponent } from './components/home/home-welcome/home-welcome.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeProductComponent } from './components/home/home-product/home-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductRecommendedComponent } from './components/product-recommended/product-recommended.component';
import { HomeCategoryComponent } from './components/home/home-category/home-category.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { UserordersComponent } from './components/userorders/userorders.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentsComponent,
    OffersComponent,
    ProfileComponent,
    HomeWelcomeComponent,
    HomeBannerComponent,
    ProductCardComponent,
    HomeProductComponent,
    ProductDetailsComponent,
    ProductRecommendedComponent,
    HomeCategoryComponent,
    CategoryCardComponent,
    CheckoutComponent,
    ProductListComponent,
    CartComponent,
    AddNewProductComponent,
    ManageProductsComponent,
    ManageUsersComponent,
    ManageOrdersComponent,
    UserordersComponent,
    ProductsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
