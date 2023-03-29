import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { LogoComponent } from './logo/logo.component'
import { LoginComponent } from './register-login/login/login.component'
import { HeaderComponent } from './header/header.component'
import { UserMenuComponent } from './userMenu/user-menu.component'
import { UserCartComponent } from './userCart/user-cart.component'
import { RegisterComponent } from './register-login/register/register.component'
import { AdminMenuComponent } from './adminMenu/admin-menu.component'
import { UserOrderComponent } from './userOrders/user-orders.component'
import { AddProductComponent } from './add-product/add-product.component'
import { UserProductsComponent } from './userProducts/user-products.component'
import { AdminProductsComponent } from './adminProducts/admin-products.component'
import { LoggedOutMenuComponent } from './loggedOutMenu/loggedOut-menu.component'
import { RegisterLoginComponent } from './register-login/register-login.component'
import { LoggedOutProductsComponent } from './loggedOutProducts/loggedOut-products.component'

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    UserMenuComponent,
    UserCartComponent,
    UserOrderComponent,
    AdminMenuComponent,
    AddProductComponent,
    UserProductsComponent,
    AdminProductsComponent,
    LoggedOutMenuComponent,
    RegisterLoginComponent,
    LoggedOutProductsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
