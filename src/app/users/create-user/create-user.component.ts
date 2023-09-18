import { Component, OnInit } from '@angular/core';
import {RequestCreate, ResponseCreate, ResponseUsers} from "../users.model";
import { UsersService } from "../users.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  request: RequestCreate = {
    name: '',
    description: '',
  }

  constructor(private userService: UsersService, http: HttpClient) {}

  ngOnInit() {}

  response: ResponseCreate = {
    name: '',
    description: '',
    id: '',
  }

  showResponse = false;
  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.showResponse = true
      console.log(this.response);
      alert("Usuário criado")
    })

  }
}
