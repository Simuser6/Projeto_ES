import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductMockService } from '../../core/services/product-mock.service';
import { Produto } from '../../core/models/produto.models';
import { MaterialModule } from '../../shared/material/material.module';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  produto: Produto | null = null;
  quantidade = 1;
  carregando = true;
  erro = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductMockService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      if (!id) {
        this.erro = 'Produto inválido';
        this.carregando = false;
        return;
      }

      this.productService.getProdutoPorId(id).subscribe({
        next: produto => {
          this.produto = produto;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Não foi possível carregar o produto.';
          this.carregando = false;
        }
      });
    });
  }

  get produtoEmoji(): string {
    if (!this.produto) {
      return '🖥️';
    }

    switch (this.produto.tipoProduto) {
      case 'CPU':
        return '🧠';
      case 'PLACA_VIDEO':
        return '🎮';
      case 'ARMAZENAMENTO':
        return '💾';
      case 'MEMORIA':
        return '🧩';
      default:
        return '🖥️';
    }
  }

  adicionarAoCarrinho() {
    if (!this.produto) {
      return;
    }

    this.quantidade = Math.max(1, this.quantidade);
    alert(`Adicionado ${this.quantidade}x ${this.produto.nome} ao carrinho.`);
  }
}
