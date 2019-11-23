import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { E404Component } from './e404/e404.component';
import { FooterComponent } from './footer/footer.component';

import { IconsModule } from './icons/icons.module';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule, MatInputModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    E404Component,
    FooterComponent,
    LoginComponent,
    NewProductComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produtos', component: ProductsComponent },
      { path: 'entrar', component: LoginComponent },
      { path: 'novo/produto', component: NewProductComponent },
      { path: 'produtos/:id', component: ProductComponent },
      { path: '**', component: E404Component },
      { path: 'e404', component: E404Component },
    ]),
    TransferHttpCacheModule,
    IconsModule,
    BrowserAnimationsModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
