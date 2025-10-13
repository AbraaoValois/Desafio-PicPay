import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentModalComponent } from '../payment-modal/payment-modal';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
declare var bootstrap: any;
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, PaymentModalComponent],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent {
  users: User[] = [];
  selectedUser?: User;
  sender: User;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
    this.sender = this.users[0]; // o primeiro usuário é o que envia
  }

  openPaymentModal(user: User) {
    this.selectedUser = user;
    const modal = document.getElementById('paymentModal');
    if (modal) {
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    }
  }

  handlePayment(event: { senderId: number; receiverId: number; amount: number }) {
    const result = this.userService.transferir(event.senderId, event.receiverId, event.amount);
    alert(result ? 'Pagamento realizado com sucesso!' : 'Saldo insuficiente!');
  }
}
