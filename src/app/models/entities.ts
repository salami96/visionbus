export interface Product {
    _id: string;
    titulo: string;
    descricao: string;
    img: string[];
    loja: string;
  }
export interface User {
    _id: string;
    nome: string;
    loja: string;
    email: string;
    senha: string;
    nivel: number;
}

