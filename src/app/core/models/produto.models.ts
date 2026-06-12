export interface Produto {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  precoAntigo?: number | null;
  emoji: string;
  tag?: { tipo: 'sale' | 'new'; label: string } | null;
  categoria: string;
}