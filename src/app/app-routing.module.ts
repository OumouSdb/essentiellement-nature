import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ContactComponent } from './PAGES/contact/contact.component';
import { LoginComponent } from './PAGES/login/login.component';
import { SubscribeComponent } from './PAGES/subscribe/subscribe.component';
import { AdminDashboardComponent } from './PAGES/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './PAGES/customer-dashboard/customer-dashboard.component';
import { MessengerComponent } from './PAGES/messenger/messenger.component';
const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: SubscribeComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'messenger', component: MessengerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {

}
