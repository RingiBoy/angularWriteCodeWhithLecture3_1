import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  postsAll: Post[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    if (!!this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.params.subscribe(value =>
        this.postService.getPostsOfUser(value.id).subscribe(value1 => {
          this.postsAll = value1;
        })
      );

    }
    else {
      this.postService.getAllPosts().subscribe(value => this.postsAll = value);
    }
  }

  ngOnInit(): void {
  }

}
