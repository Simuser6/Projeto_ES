export interface Produto2 {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  precoAntigo?: number | null;
  emoji: string;
  tag?: { tipo: 'sale' | 'new'; label: string } | null;
  categoria: string;
}


export interface ProdutoBase {
  sku: string;
  nome: string;
  precoVenda: number;
  qtdEstoque: number;
  qtdMinima: number;
  tipoProduto: 'CPU' | 'PLACA_VIDEO' | 'ARMAZENAMENTO' | 'MEMORIA';
  descricaoTecnica?: string;
}

export interface CPU extends ProdutoBase {
  tipoProduto: 'CPU';
  arquitetura: string;
  nucleos: number;
}

export interface PlacaDeVideo extends ProdutoBase {
  tipoProduto: 'PLACA_VIDEO';
  memoriaVRAM: number;
  chipset: string;
}

export interface DispositivoDeArmazenamento extends ProdutoBase {
  tipoProduto: 'ARMAZENAMENTO';
  capacidadeGB: number;
  tipo: 'HDD' | 'SSD' | 'NVME';
}

export interface Memoria extends ProdutoBase {
  tipoProduto: 'MEMORIA';
  capacidadeGB: number;
  tipo: 'DDR4' | 'DDR5';
}

export type Produto = CPU | PlacaDeVideo | DispositivoDeArmazenamento | Memoria;