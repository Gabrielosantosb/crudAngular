import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {ResponseUser, ResponseUsers, User} from "./users.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  responseUsers: ResponseUsers | undefined = undefined;
  users: User |undefined = undefined
  // responseUsers: ResponseUser | undefined = undefined;


  constructor(private userService: UsersService) {
  }


  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => {
        console.log('Resposta da API:', res.data);
        this.responseUsers = res;

      },
      error => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }

  // ngOnInit() {
  //   this.userService.getUsers().subscribe(
  //     res => {
  //       this.responseUsers = res;
  //       console.log('Data: ', this.responseUsers);
  //     },
  //     error => {
  //       console.error('Erro ao obter dados:', error);
  //     }
//     );
//   }
}
