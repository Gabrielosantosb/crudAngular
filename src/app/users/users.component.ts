import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import { User} from './users.model';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css', '../users/delete/delete.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  data: User[] = [];
  _user$ =  this.userService.getUsers();
  private userSub: Subscription = new Subscription()
  constructor(private userService: UsersService) {
  }


  deleteAll(){
    this.userService.deleteAllUsers().subscribe()
    location.reload()
    alert('Usuários deletados')

  }
  ngOnInit() {
    try {
    this.userSub = this._user$.subscribe((res: User[])=>{
      console.log('Res:', res)
      this.data = res;
      console.log(this.data)
    });
    }
    catch (e) {
      console.log('Deu erro')

    }
  }


  ngOnDestroy(): void {
    if (this.userSub)
      this.userSub.unsubscribe()
  }
}
