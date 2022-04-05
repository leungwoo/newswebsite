import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NewsapiserviceService } from './service/newsapiservice.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TechpageComponent } from './techpage/techpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    NavbarComponent,
    FooterComponent,
    SubscribeComponent,
    TechpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  entryComponents: [SubscribeComponent],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
