import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string = this.route.snapshot.paramMap.get('id') ?? '';
  user: User = {
    id: '',
    name: '',
    description: '',
    published: false
  };

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) { }

  update() {
    this.userService.updateUser(this.id, this.user).subscribe(res => {
      alert('Usuário atualizado');
      this.router.navigate(['users']);
    });
  }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(res => {
      this.user = {
        id: this.id,
        name: res.name || '',
        description: res.description || '',
        published: true
      };
    });
  }
}
