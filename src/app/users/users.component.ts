import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import { User} from './users.model';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  data: User[] = [];
  _user$ =  this.userService.getUsers();
  private userSub: Subscription = new Subscription()
  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userSub = this._user$.subscribe((res: User[])=>{
      // console.log('Res:', res)
      this.data = res;
    });


  }

  ngOnDestroy(): void {
    if (this.userSub)
      this.userSub.unsubscribe()
  }
}
