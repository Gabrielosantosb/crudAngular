import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute} from "@angular/router";
import {RequestUpdate} from "../users.model";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  id: string | any
  request: RequestUpdate | any

  constructor(private userService: UsersService, private route: ActivatedRoute) {
  }

  update() {
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      alert('Usuário atualizado')
    })
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        // O job não vem neste get
        job: ''
      }
    })
  }

}
