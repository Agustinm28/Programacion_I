import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';
import { ApplicationModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { NavbarComponent } from './components/navbars/navbar/navbar.component';
import { NavbarUnregisteredComponent } from './components/navbars/navbar-unregistered/navbar-unregistered.component';
import { MainPoemCardLuismiComponent } from './components/main-card-poem/main-poem-card-luismi/main-poem-card-luismi.component';
import { MainPoemCardHenryComponent } from './components/main-card-poem/main-poem-card-henry/main-poem-card-henry.component';
import { MainPoemCardChanoComponent } from './components/main-card-poem/main-poem-card-chano/main-poem-card-chano.component';
import { MainPoemCardNotloggedComponent } from './components/main-card-poem/main-poem-card-notlogged/main-poem-card-notlogged.component';
import { CommentChanoComponent } from './components/comments/comment-chano/comment-chano.component';
import { CommentLuismiComponent } from './components/comments/comment-luismi/comment-luismi.component';
import { AddCommentComponent } from './components/comments/add-comment/add-comment.component';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';
import { ProfileTopComponent } from './components/profile/profile-top/profile-top.component';
import { ProfileDataComponent } from './components/profile/profile-data/profile-data.component';
import { MainPoemCardOwnComponent } from './components/main-card-poem/main-poem-card-own/main-poem-card-own.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { RegistrationCardComponent } from './components/registration-card/registration-card.component';
import { NotAdminNavbarComponent } from './components/navbars/not-admin-navbar/not-admin-navbar.component';
import { ApprovalReqContainerComponent } from './components/approval/approval-req-container/approval-req-container.component';
import { ApprovalReqHenryComponent } from './components/approval/approval-req-henry/approval-req-henry.component';
import { ApprovalReqPeterComponent } from './components/approval/approval-req-peter/approval-req-peter.component';
import { ApprovalReqMontiComponent } from './components/approval/approval-req-monti/approval-req-monti.component';
import { ApprovalReqComponent } from './components/approval/approval-req/approval-req.component';
import { DelModContainerComponent } from './components/del-mod/del-mod-container/del-mod-container.component';
import { DelModLuismiComponent } from './components/del-mod/del-mod-luismi/del-mod-luismi.component';
import { DelModChanoComponent } from './components/del-mod/del-mod-chano/del-mod-chano.component';
import { DelModHenryComponent } from './components/del-mod/del-mod-henry/del-mod-henry.component';
import { DelModPeterComponent } from './components/del-mod/del-mod-peter/del-mod-peter.component';
import { DelModMontiComponent } from './components/del-mod/del-mod-monti/del-mod-monti.component';
import { DelModBrunengoComponent } from './components/del-mod/del-mod-brunengo/del-mod-brunengo.component';
import { DelModPruebaComponent } from './components/del-mod/del-mod-prueba/del-mod-prueba.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeUnregisteredComponent } from './pages/home-unregistered/home-unregistered.component';
import { HomeRegUserComponent } from './pages/home-reg-user/home-reg-user.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PoemEditorComponent } from './pages/poem-editor/poem-editor.component';
import { EditorComponent } from './components/editor/editor.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { DeleteOrModifyComponent } from './pages/delete-or-modify/delete-or-modify.component';
import { FilteredComponent } from './pages/filtered/filtered.component';
import { FilteredPoemsGenericComponent } from './components/filtered/filtered-poems-generic/filtered-poems-generic.component';
import { FilteredDropdownsComponent } from './components/filtered/filtered-dropdowns/filtered-dropdowns.component';

import { PoemService } from './services/poem.service';
import { PoetService } from './services/poet.service';
import { RatingService } from './services/rating.service';
import { LoadJSService } from './services/load-js.service'
import { MainCardGenericComponent } from './components/main-card-poem/main-card-generic/main-card-generic.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RestorepassComponent } from './pages/restorepass/restorepass.component';
import { RestorepComponent } from './components/restorep/restorep.component';
import { ChangepComponent } from './components/changep/changep.component';
import { ChangepassComponent } from './pages/changepass/changepass.component';

import { RestorepasswordService } from './services/restorepassword.service';
import { EditprofilepageComponent } from './pages/editprofilepage/editprofilepage.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { CommentGenericComponent } from './components/comments/comment-generic/comment-generic.component';
import { ImageUploadModule } from 'angular2-image-upload';



@NgModule({
  declarations: [
    AppComponent,
    HomeAdminComponent,
    NavbarComponent,
    NavbarUnregisteredComponent,
    MainPoemCardLuismiComponent,
    MainPoemCardHenryComponent,
    MainPoemCardChanoComponent,
    MainPoemCardNotloggedComponent,
    CommentChanoComponent,
    CommentLuismiComponent,
    AddCommentComponent,
    PaginationBarComponent,
    ProfileTopComponent,
    ProfileDataComponent,
    MainPoemCardOwnComponent,
    LoginCardComponent,
    RegistrationCardComponent,
    NotAdminNavbarComponent,
    PoemEditorComponent,
    ApprovalReqContainerComponent,
    ApprovalReqHenryComponent,
    ApprovalReqPeterComponent,
    ApprovalReqMontiComponent,
    ApprovalReqComponent,
    DelModContainerComponent,
    DelModLuismiComponent,
    DelModChanoComponent,
    DelModHenryComponent,
    DelModPeterComponent,
    DelModMontiComponent,
    DelModBrunengoComponent,
    DelModPruebaComponent,
    LoginComponent,
    RegistrationComponent,
    HomeUnregisteredComponent,
    HomeRegUserComponent,
    Error404Component,
    ProfileComponent,
    CommentsComponent,
    PoemEditorComponent,
    EditorComponent,
    PendingRequestComponent,
    DeleteOrModifyComponent,
    FilteredComponent,
    FilteredPoemsGenericComponent,
    FilteredDropdownsComponent,
    MainCardGenericComponent,
    RestorepassComponent,
    RestorepComponent,
    ChangepComponent,
    ChangepassComponent,
    EditprofilepageComponent,
    EditprofileComponent,
    CommentGenericComponent
  ],
  imports: [
    ApplicationModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot()
  ],
  providers: [
    PoemService,
    PoetService,
    RatingService,
    RestorepasswordService,
    DatePipe,
    LoadJSService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
