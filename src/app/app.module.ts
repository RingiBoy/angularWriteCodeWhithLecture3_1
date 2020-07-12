import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'viewItRoutForShowAllUsers', component: AllUsersComponent},
      // {path: 'viewItRoutForShowAllPosts'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

