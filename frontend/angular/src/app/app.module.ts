import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';
import { ApplicationModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarUnregisteredComponent } from './components/navbar-unregistered/navbar-unregistered.component';
import { MainPoemCardLuismiComponent } from './components/main-poem-card-luismi/main-poem-card-luismi.component';
import { MainPoemCardHenryComponent } from './components/main-poem-card-henry/main-poem-card-henry.component';
import { MainPoemCardChanoComponent } from './components/main-poem-card-chano/main-poem-card-chano.component';
import { MainPoemCardNotloggedComponent } from './components/main-poem-card-notlogged/main-poem-card-notlogged.component';
import { CommentChanoComponent } from './components/comment-chano/comment-chano.component';
import { CommentLuismiComponent } from './components/comment-luismi/comment-luismi.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';
import { ProfileTopComponent } from './components/profile-top/profile-top.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { MainPoemCardOwnComponent } from './components/main-poem-card-own/main-poem-card-own.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { RegistrationCardComponent } from './components/registration-card/registration-card.component';
import { NotAdminNavbarComponent } from './components/not-admin-navbar/not-admin-navbar.component';
import { ApprovalReqContainerComponent } from './components/approval-req-container/approval-req-container.component';
import { ApprovalReqHenryComponent } from './components/approval-req-henry/approval-req-henry.component';
import { ApprovalReqPeterComponent } from './components/approval-req-peter/approval-req-peter.component';
import { ApprovalReqMontiComponent } from './components/approval-req-monti/approval-req-monti.component';
import { DelModContainerComponent } from './components/del-mod-container/del-mod-container.component';
import { DelModLuismiComponent } from './components/del-mod-luismi/del-mod-luismi.component';
import { DelModChanoComponent } from './components/del-mod-chano/del-mod-chano.component';
import { DelModHenryComponent } from './components/del-mod-henry/del-mod-henry.component';
import { DelModPeterComponent } from './components/del-mod-peter/del-mod-peter.component';
import { DelModMontiComponent } from './components/del-mod-monti/del-mod-monti.component';
import { DelModBrunengoComponent } from './components/del-mod-brunengo/del-mod-brunengo.component';
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
import { FilteredPoemsLilComponent } from './components/filtered-poems-lil/filtered-poems-lil.component';
import { PoemOneComponent } from './components/filtered_poems_luismi/poem-one/poem-one.component';
import { PoemTwoComponent } from './components/filtered_poems_luismi/poem-two/poem-two.component';
import { MontiPoemOneComponent } from './components/filtered_poems_monti28/monti-poem-one/monti-poem-one.component';
import { MontiPoemTwoComponent } from './components/filtered_poems_monti28/monti-poem-two/monti-poem-two.component';
import { FilteredPoemsHenryCComponent } from './components/filtered-poems-henry-c/filtered-poems-henry-c.component';
import { FilteredDropdownsComponent } from './components/filtered-dropdowns/filtered-dropdowns.component';
import { FilteredPoemsChanoComponent } from './components/filtered-poems-chano/filtered-poems-chano.component';
import { FilteredPoemsBrunengoComponent } from './components/filtered-poems-brunengo/filtered-poems-brunengo.component';


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
    DelModContainerComponent,
    DelModLuismiComponent,
    DelModChanoComponent,
    DelModHenryComponent,
    DelModPeterComponent,
    DelModMontiComponent,
    DelModBrunengoComponent,
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
    FilteredPoemsLilComponent,
    PoemOneComponent,
    PoemTwoComponent,
    MontiPoemOneComponent,
    MontiPoemTwoComponent,
    FilteredPoemsHenryCComponent,
    FilteredDropdownsComponent,
    FilteredPoemsChanoComponent,
    FilteredPoemsBrunengoComponent,
  ],
  imports: [
    ApplicationModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
