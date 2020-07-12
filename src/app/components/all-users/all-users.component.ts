import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  users: User[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }


  ngOnInit(): void {
  }

}
