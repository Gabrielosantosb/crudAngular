import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.model';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css', '../create-user/create-user.component.css']
})
export class UpdateComponent implements OnInit {
  userForm: FormGroup;
  id: string = this.route.snapshot.paramMap.get('id') ?? '';
  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    description: '',

  };

  constructor(private userService: UsersService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],

    });
  }

  update() {
    if (this.userForm.valid) {
      this.userService.updateUser(this.id, this.user).subscribe(res => {
        console.log(res)
        alert('Usuário atualizado')
        this.router.navigate(['users'])

      });
    } else {
      alert('Por favor, preencha os campos corretamente.');
    }
  }

  ngOnInit() {

    this.userService.getUser(this.id).subscribe(res => {
    console.log("Aqui" + res.lastName)
      this.user = {
        id: this.id,
        firstName: res.firstName || '',
        lastName: res.lastName || '',
        description: res.description || '',

      };
      // Preencha o formulário com os valores do usuário
      this.userForm.patchValue(this.user);
    });
  }
}
