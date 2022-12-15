import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
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
import { RestorepassComponent } from './pages/restorepass/restorepass.component'
import { ChangepassComponent } from './pages/changepass/changepass.component'
import { EditprofilepageComponent } from './pages/editprofilepage/editprofilepage.component'
import { EditprofilepageadminComponent } from './pages/editprofilepageadmin/editprofilepageadmin.component'
import { ChangeuserpassComponent } from './pages/changeuserpass/changeuserpass.component'

const routes: Routes = [
  { path: '', component: HomeAdminComponent},
  { path: 'home', component: HomeAdminComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'restore', component: RestorepassComponent },
  { path: 'change_password', component: ChangepassComponent },
  { path: 'change_upassword', component: ChangeuserpassComponent },
  { path: 'logged/:username', component: HomeAdminComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/profile', component: ProfileComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/profile/edit', component: EditprofilepageComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/profile/edituser', component: EditprofilepageadminComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/editor', component: PoemEditorComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/:poemId/comments', component: CommentsComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/delete_or_modify', component: DeleteOrModifyComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/pending_request', component: PendingRequestComponent, canActivate:[AuthsessionGuard] },
  { path: 'login/admin/filtered', component: FilteredComponent, canActivate:[AuthsessionGuard] },
  { path: '**', component: Error404Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }