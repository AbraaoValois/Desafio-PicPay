// src/app/components/payment-modal/payment-modal.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { User } from '../../models/user.model';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [provideNgxMask()],
  templateUrl: './payment-modal.html',
  styleUrls: ['./payment-modal.scss']
})
export class PaymentModalComponent {
  @Input() receiver!: User;
  @Input() sender!: User;
  @Output() onPay = new EventEmitter<{ senderId: number; receiverId: number; amount: number }>();

  amount: string = ''; // usar string para máscara

  pagar(amountInput: NgModel) {
    const value = parseFloat(this.amount.replace(/\./g, '').replace(',', '.'));
    
    if (!isNaN(value) && value > 0) {
      this.onPay.emit({ senderId: this.sender.id, receiverId: this.receiver.id, amount: value });
      this.amount = '';
      amountInput.reset();
    } else {
      alert('Digite um valor válido!');
    }
  }
}
