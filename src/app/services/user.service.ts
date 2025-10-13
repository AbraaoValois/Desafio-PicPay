import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, nome: 'Abraão', saldo: 1200, email: 'abraao@picpay.com', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, nome: 'João', saldo: 430, email: 'joao@picpay.com', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, nome: 'Maria', saldo: 890, email: 'maria@picpay.com', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, nome: 'Carlos', saldo: 250, email: 'carlos@picpay.com', avatar: 'https://i.pravatar.cc/150?img=4' },
  ];

  getUsers() {
    return this.users;
  }

  transferir(senderId: number, receiverId: number, valor: number): boolean {
    const sender = this.users.find(u => u.id === senderId);
    const receiver = this.users.find(u => u.id === receiverId);

    if (!sender || !receiver || sender.saldo < valor) return false;

    sender.saldo -= valor;
    receiver.saldo += valor;
    return true;
  }
}
