import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../../app/core/models/produto.models';
import { ProdutoService } from '../../../app/core/services/produto.services';

@Component({
  selector: 'app-categoria',
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