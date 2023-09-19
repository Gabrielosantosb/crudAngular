import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../users.model";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


  id: string =  this.route.snapshot.paramMap.get('id') ?? '';
  user: User[] | any



  constructor(private userService: UsersService, private route: ActivatedRoute, private _route :Router) {
    console.log( 'Aqui o id' + this.route.snapshot.paramMap.get('id'))
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe(res => {
      this._route.navigate(['users'])
      alert("Removido com sucesso!")
    })
  }
  cancel(){
    this._route.navigate(['users'])
  }

  ngOnInit() {

  }

  // protected readonly name = name;
}
