import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { DividerComponent } from '../shared/divider/divider.component';
import { BoxesComponent } from './boxes/boxes.component';
@NgModule({
  declarations: [
    HomeViewComponent,
    CarouselComponent,
    DividerComponent,
    BoxesComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
