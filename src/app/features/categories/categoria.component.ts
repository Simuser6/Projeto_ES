import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Produto } from '../../core/models/produto.models';
import { ProdutoService } from '../../core/services/produto.services';
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { DecimalPipe, CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, DecimalPipe],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})

export class CategoriaComponent implements OnInit {
  nomeCategoria = '';
  produtos: Produto[] = [];
  carregando = true;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nomeCategoria = params.get('nome') || '';
      this.carregarProdutos();
    });
  }

  carregarProdutos() {
    this.carregando = true;
    this.produtoService.getPorCategoria(this.nomeCategoria).subscribe(produtos => {
      this.produtos = produtos;
      this.carregando = false;
    });
  }

  adicionarAoCarrinho(prod: Produto) {
    // integrar com CartService
  }
}