import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
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
  @Input() user!: User | undefined;
  @Input() cards: any[] = [];
  @Input() selectedCard: number | null = null;
  @Input() amount: number | null = null;

  @Output() selectedCardChange = new EventEmitter<number | null>();
  @Output() amountChange = new EventEmitter<number | null>();
  @Output() close = new EventEmitter<void>();

  onCardChange(cardId: number) {
    this.selectedCard = cardId;
    this.selectedCardChange.emit(this.selectedCard);
  }

  onAmountChange(amount: number) {
    this.amount = amount;
    this.amountChange.emit(this.amount);
  }

  closeModal() {
    this.close.emit();
  }
}
