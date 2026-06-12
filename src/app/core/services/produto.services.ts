import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../../../app/core/models/produto.models';

@Injectable({ providedIn: 'root' })
export class ProdutoService {

  private produtos: Produto[] = [
    { id: 1, nome: 'Ryzen 5 5600X',       marca: 'AMD',      preco: 899.90,  precoAntigo: 1099.90, emoji: '🖥️', tag: { tipo: 'sale', label: '-18%' }, categoria: 'Processadores' },
    { id: 2, nome: 'GeForce RTX 4060 8GB',marca: 'NVIDIA',   preco: 2199.90, precoAntigo: null,    emoji: '🎮', tag: { tipo: 'new',  label: 'Novo' },  categoria: 'Placas de Vídeo' },
    { id: 3, nome: 'SSD NVMe 1TB 3500MB/s',marca: 'Kingston',preco: 379.90,  precoAntigo: 449.90,  emoji: '💾', tag: { tipo: 'sale', label: '-15%' }, categoria: 'SSD' },
    { id: 4, nome: 'DDR4 16GB 3200MHz',   marca: 'Corsair',  preco: 249.90,  precoAntigo: null,    emoji: '🧩', tag: null, categoria: 'Memórias RAM' },
  ];

  getDestaques(): Observable<Produto[]> {
    return of(this.produtos);
  }

  getPorCategoria(nomeCategoria: string): Observable<Produto[]> {
    const filtrados = this.produtos.filter(
      p => p.categoria.toLowerCase() === nomeCategoria.toLowerCase()
    );
    return of(filtrados);
  }
}