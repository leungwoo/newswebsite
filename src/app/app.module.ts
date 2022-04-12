import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsapiserviceService } from './service/newsapiservice.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TechpageComponent } from './techpage/techpage.component';
import { TopheadingComponent } from './topheading/topheading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TechpageComponent,
    TopheadingComponent,
    HighlightDirective,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  entryComponents: [],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
