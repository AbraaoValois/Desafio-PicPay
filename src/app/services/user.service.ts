import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, nome: 'Abraão', saldo: 1200, email: 'abraao@picpay.com', avatar: 'https://i.pravatar.cc/150?img=1', password: '1234' },
    { id: 2, nome: 'João', saldo: 430, email: 'joao@picpay.com', avatar: 'https://i.pravatar.cc/150?img=2', password: '1234' },
    { id: 3, nome: 'Maria', saldo: 890, email: 'maria@picpay.com', avatar: 'https://i.pravatar.cc/150?img=3', password: '1234' },
    { id: 4, nome: 'Carlos', saldo: 250, email: 'carlos@picpay.com', avatar: 'https://i.pravatar.cc/150?img=4', password: '1234' },
  ];

  private loggedUser: User | null = null;

  // Retorna todos os usuários
  getUsers(): User[] {
    return this.users;
  }

  // Adiciona um novo usuário
  addUser(user: Omit<User, 'id' | 'saldo'> & { password: string }) {
    const newUser: User = {
      id: this.users.length + 1,
      nome: user.nome,
      saldo: 0,
      email: user.email,
      avatar: user.avatar || `https://i.pravatar.cc/150?img=${this.users.length + 1}`,
      password: user.password
    };
    this.users.push(newUser);
  }

  // Realiza login, retorna true se sucesso
  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.loggedUser = user;
      return true;
    }
    return false;
  }

  // Retorna o usuário logado
  getLoggedUser(): User | null {
    return this.loggedUser;
  }

  // Logout
  logout() {
    this.loggedUser = null;
  }

  // Transfere saldo de um usuário para outro
  transferir(senderId: number, receiverId: number, valor: number): boolean {
    const sender = this.users.find(u => u.id === senderId);
    const receiver = this.users.find(u => u.id === receiverId);

    if (!sender || !receiver || sender.saldo < valor) return false;

    sender.saldo -= valor;
    receiver.saldo += valor;
    return true;
  }
}
