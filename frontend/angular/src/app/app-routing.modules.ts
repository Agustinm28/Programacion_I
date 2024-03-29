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
import { DeleteOrModifyComponent } from './pages/delete-or-modify/delete-or-modify.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { FilteredComponent } from './pages/filtered/filtered.component';
import { AuthsessionGuard } from './guards/authsession.guard';

const routes: Routes = [
  { path: '', component: HomeAdminComponent},
  { path: 'home', component: HomeAdminComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'logged/:username', component: HomeRegUserComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/profile', component: ProfileComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/editor', component: PoemEditorComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/:poemId/comments', component: CommentsComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/delete_or_modify', component: DeleteOrModifyComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/pending_request', component: PendingRequestComponent, canActivate:[AuthsessionGuard] },
  { path: 'logged/:username/filtered', component: FilteredComponent, canActivate:[AuthsessionGuard] },
  { path: '**', component: Error404Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }