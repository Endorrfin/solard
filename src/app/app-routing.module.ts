import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {OurServicesComponent} from "./components/our-services/our-services.component";
import {CareerComponent} from "./components/career/career.component";
import {ContactsComponent} from "./components/contacts/contacts.component";

// http://localhost:4200/   -> HomeComponent
// http://localhost:4200/our-services   -> OurServicesComponent
// http://localhost:4200/career   -> CareerComponent
// http://localhost:4200/contacts   -> ContactsComponent

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'our-services', component: OurServicesComponent},
  {path: 'career', component: CareerComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

