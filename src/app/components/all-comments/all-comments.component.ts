import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})




export class AllCommentsComponent implements OnInit {


  AllComments: Comment;

  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(value => this.AllComments = value);
  }


  ngOnInit(): void {
  }

}
