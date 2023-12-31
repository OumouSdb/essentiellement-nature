import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/component/navbar/navbar.component';
import { HomeComponent } from '../app/home/home.component';
import { ContactComponent } from './PAGES/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './PAGES/login/login.component';
import { AdminDashboardComponent } from './PAGES/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './PAGES/customer-dashboard/customer-dashboard.component';
import { SubscribeComponent } from './PAGES/subscribe/subscribe.component';
import { MessengerComponent } from './PAGES/messenger/messenger.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    SubscribeComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
