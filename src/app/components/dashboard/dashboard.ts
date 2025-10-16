import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { PaymentModalComponent } from '../payment-modal/payment-modal';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  standalone: true,
  imports: [CommonModule, NgFor, CurrencyPipe, PaymentModalComponent] // 🔹 corrige *ngFor e currency
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  currentUser!: User; // usuário logado

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.currentUser = this.userService.getLoggedUser() || this.users[0]; 
    // mantém a lógica anterior caso não haja usuário logado
  }

  openPaymentModal(user: User) {
    this.selectedUser = user;
  }

  handlePayment(event: { senderId: number; receiverId: number; amount: number }) {
    const success = this.userService.transferir(event.senderId, event.receiverId, event.amount);
    if (!success) alert('Saldo insuficiente!');
    this.selectedUser = null;
  }

  // 🔹 Adiciona logout sem alterar lógica
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']); // volta para a tela de login
  }
}
