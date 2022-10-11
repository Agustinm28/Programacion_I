import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeRegUserComponent } from './pages/home-reg-user/home-reg-user.component';
import { HomeUnregisteredComponent } from './pages/home-unregistered/home-unregistered.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PoemEditorComponent } from './pages/poem-editor/poem-editor.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeUnregisteredComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'logged/username', component: HomeRegUserComponent },
  { path: 'login/admin', component: HomeAdminComponent },
  { path: 'login/admin/profile', component: ProfileComponent },
  { path: 'login/admin/editor', component: PoemEditorComponent },
  { path: 'login/admin/comments', component: CommentsComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }