import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NewsapiserviceService } from './service/newsapiservice.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, TopheadingComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
