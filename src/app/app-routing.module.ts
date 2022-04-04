import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechpageComponent } from './techpage/techpage.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  { path: 'topheading', component: TopheadingComponent },
  { path: 'techpage', component: TechpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
