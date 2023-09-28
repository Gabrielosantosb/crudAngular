import {Component, OnInit} from '@angular/core';
import { User} from "../users.model";
import {UsersService} from "../users.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      published: [false],
    });
  }

  save() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.userService.createUser(user).subscribe((res) => {
        this.router.navigate(['users']);
        alert('Usuário criado');
      });
    } else {
     alert('Insira os campos corretamente!')
    }
  }
}
