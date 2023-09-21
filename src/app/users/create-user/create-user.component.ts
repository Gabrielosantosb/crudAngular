import {Component, OnInit} from '@angular/core';
import {RequestCreate, ResponseCreate, ResponseUsers, User} from "../users.model";
import {UsersService} from "../users.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user: User = {
    id: '',
    name: '',
    description: '',
    published: false
  }

  constructor(private userService: UsersService, http: HttpClient,private router: Router) {
  }


  save() {
    this.userService.createUser(this.user).subscribe(res => {
      this.router.navigate(['users'])
      alert("Usuário criado")
    })

  }
}
