import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    if (this.userService.login(this.email, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Email ou senha inválidos!');
    }
  }
}
