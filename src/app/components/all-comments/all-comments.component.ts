import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})


export class AllCommentsComponent implements OnInit {


  AllComments: Comment[];

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute) {
    console.log('activatedRoute.snapshot.params.id');
    console.log(this.activatedRoute.snapshot.params.postId);
    if (!!this.activatedRoute.snapshot.params.postId) {
      activatedRoute.params.subscribe(value => {
        // console.log('value');
        // console.log(value);
        this.commentService.getCommentsOfPost(value.postId).subscribe(value1 => {
          console.log('value1');
          console.log(value1);
          this.AllComments = value1;
        });
      });
    } else {
      this.commentService.getAllComments().subscribe(value => this.AllComments = value);
    }
  }


  ngOnInit(): void {
  }

}
