export interface User {
  id: number;
  nome: string;
  saldo: number;
  email: string;
  avatar: string;
  password?: string; // Adicione esta linha
}