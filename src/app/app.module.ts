import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';

const links: Routes = [
  {path: 'viewItRoutForShowAllUsers', component: AllUsersComponent},
  {path: 'viewItRoutForShowAllPosts', component: AllPostsComponent},
  {path: 'viewItRoutForShowAllComments', component: AllCommentsComponent},
  {path: 'posts/:id', component: AllPostsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(links),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

