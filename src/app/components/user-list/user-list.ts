import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { PaymentModalComponent } from '../payment-modal/payment-modal';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PaymentModalComponent],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent {
  users = signal<User[]>([
    { id: 1, name: 'Abraão', username: '@abraao', email: 'abraao@email.com', balance: 1200 },
    { id: 2, name: 'Maria', username: '@maria', email: 'maria@email.com', balance: 850 },
    { id: 3, name: 'João', username: '@joao', email: 'joao@email.com', balance: 430 },
    { id: 4, name: 'Jéssica', username: '@jessica', email: 'jessica@email.com', balance: 380}
  ]);

  showPaymentModal = signal(false);
  selectedUserId = signal<number | null>(null);
  amount = signal<number>(0);

  cards = signal([
    { id: 1, name: 'Visa ****1234' },
    { id: 2, name: 'MasterCard ****5678' }
  ]);
  selectedCard = signal<number | null>(null);

  openPaymentModal(userId: number) {
    this.selectedUserId.set(userId);
    this.showPaymentModal.set(true);
  }

  closePaymentModal() {
    this.selectedUserId.set(null);
    this.amount.set(0);
    this.selectedCard.set(null);
    this.showPaymentModal.set(false);
  }

  get selectedUser(): User | undefined {
    return this.users().find(u => u.id === this.selectedUserId());
  }
}
