// src/app/components/payment-modal/payment-modal.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-modal.html',
  styleUrls: ['./payment-modal.scss']
})
export class PaymentModalComponent {
  @Input() receiver!: User;
  @Input() sender!: User;
  @Output() onPay = new EventEmitter<{ senderId: number; receiverId: number; amount: number }>();

  amount: number = 0;

  pagar() {
    if (this.amount > 0) {
      // dispara o evento com IDs e valor
      this.onPay.emit({ senderId: this.sender.id, receiverId: this.receiver.id, amount: this.amount });

      // animação visual: destaque no saldo
      const saldoEl = document.querySelector('.modal-body p');
      if (saldoEl) {
        saldoEl.classList.add('highlight');
        setTimeout(() => saldoEl.classList.remove('highlight'), 500);
      }

      this.amount = 0;
    }
  }
}
