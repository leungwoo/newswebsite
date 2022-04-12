import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechpageComponent } from './techpage.component';

const routes: Routes = [{ path: '', component: TechpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechpageRoutingModule {}
