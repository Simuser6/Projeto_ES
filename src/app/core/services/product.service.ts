import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, Produto2, ProdutoBase } from '../models/produto.models';
import { environment } from '../../../environments/environment';
import { ProductMockService } from '../../core/services/product-mock.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = `${environment.apiUrl}/produtos`;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private productService: ProductMockService
  ) {}
  
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getPorCategoria(nomeCategoria: string): Observable<Produto2[]> {
    return this.http.get<Produto2[]>(`${this.apiUrl}?categoria=${encodeURIComponent(nomeCategoria)}`);
  }

  getProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  getProdutoPorSku(sku: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/sku/${encodeURIComponent(sku)}`);
  }
  
  createProduto(produto: ProdutoBase): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  updateProduto(id: number, produto: ProdutoBase): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchProdutos(term: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/search?query=${term}`);
  }
}