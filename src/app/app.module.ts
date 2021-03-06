import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { CareerComponent } from './components/career/career.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HomeComponent, OurServicesComponent, CareerComponent, ContactsComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
