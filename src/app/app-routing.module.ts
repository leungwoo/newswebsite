import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'topheading', pathMatch: 'full' },
  {
    path: 'topheading',
    loadChildren: () =>
      import('./topheading/topheading.module').then((m) => m.TopheadingModule),
  },
  {
    path: 'techpage',
    loadChildren: () =>
      import('./techpage/techpage.module').then((m) => m.TechpageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
