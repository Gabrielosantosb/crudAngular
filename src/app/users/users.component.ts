import { Component, OnInit } from '@angular/core';
import { UsersService } from "./users.service";
import { ResponseUsers } from "./users.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  responseUsers: ResponseUsers | undefined = undefined;


  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => this.responseUsers = res
    );
  }
}
