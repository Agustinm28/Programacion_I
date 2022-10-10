import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeAdminComponent } from './pages/home-admin/home-admin.component';

const routes: Routes = [
  { path: '', component: HomeAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }