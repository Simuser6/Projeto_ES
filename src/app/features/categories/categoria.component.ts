import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Produto } from '../../core/models/produto.models';
import { Categoria } from '../../core/models/categoria.models';
import { ProductService } from '../../core/services/product.service';
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
  carregando = false;
  categorias: Categoria[] = [
    { nome: 'Placa-Mãe',       quantidade: 142, icon: 'developer_board', bgColor: '#FFF0E6', iconColor: '#E8650A' },
    { nome: 'Placas de Vídeo', quantidade: 387, icon: 'memory',          bgColor: '#F0EDE8', iconColor: '#3A3A3C' },
    { nome: 'Processadores',   quantidade: 219, icon: 'cpu',             bgColor: '#E6F5F0', iconColor: '#0F6E56' },
    { nome: 'Memórias RAM',    quantidade: 98,  icon: 'sim_card',        bgColor: '#E6F0FA', iconColor: '#185FA5' },
    { nome: 'SSD',             quantidade: 564, icon: 'sd_card',         bgColor: '#FFF0E6', iconColor: '#E8650A' },
    { nome: 'HDD',             quantidade: 76,  icon: 'storage',         bgColor: '#F5EAF0', iconColor: '#993556' },
    { nome: 'Cabos',           quantidade: 105, icon: 'cable',           bgColor: '#F0F5E6', iconColor: '#3B6D11' },
    { nome: 'Monitores',       quantidade: 61,  icon: 'monitor',         bgColor: '#F0EDE8', iconColor: '#3A3A3C' },
  ];

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nomeCategoria = params.get('nome') || '';
      if (this.nomeCategoria) {
        this.carregarProdutos();
      } else {
        this.produtos = [];
        this.carregando = false;
      }
    });
  }

  carregarProdutos() {
    if (!this.nomeCategoria) {
      this.produtos = [];
      this.carregando = false;
      return;
    }

    this.carregando = true;
    this.produtoService.getPorCategoria(this.nomeCategoria).subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      this.carregando = false;
    });
  }

  selecionarCategoria(categoria: string) {
    this.nomeCategoria = categoria;
    this.carregarProdutos();
  }

  adicionarAoCarrinho(prod: Produto) {
    // integrar com CartService
  }
}