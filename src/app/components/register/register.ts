import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
})
export class RegisterComponent {
  nome = '';
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
   this.userService.addUser({
  nome: this.nome,
  email: this.email,
  password: this.password,
  avatar: 'https://i.pravatar.cc/150'
    });
    alert('Usuário cadastrado com sucesso!');
    this.router.navigate(['/login']);
  }
}
