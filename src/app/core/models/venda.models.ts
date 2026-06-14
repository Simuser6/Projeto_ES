import { Fornecedor } from './fornecedor.models';
import { ProdutoBase } from './produto.models';

export interface ItemVenda {
  produto: ProdutoBase;
  quantidade: number;
  precoUnitario: number;
  fornecedor: Fornecedor;
}

export interface Venda {
  id: number;
  dataHora: string;
  status: 'ABERTA' | 'CONCLUIDA' | 'CANCELADA';
  usuario: import('./usuário.models').Usuario;
  itens: ItemVenda[];
  total?: number;
}