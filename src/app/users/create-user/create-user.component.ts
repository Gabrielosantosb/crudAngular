import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from "../users.model";
import { UsersService } from "../users.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  request: RequestCreate = {
    name: '',
    job: '',
  }

  constructor(private userService: UsersService) {}

  ngOnInit() {}

  response: ResponseCreate = {
    name: '',
    job: '',
    id: '',
    createdAt: ''

  }


  showResponse = false;
  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
      console.log(this.response);
      this.showResponse = true
    })
  }
}
