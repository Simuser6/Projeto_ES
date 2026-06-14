import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, Produto2, ProdutoBase } from '../models/produto.models';
import { environment } from '../../../envirolment/envirolment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = `${environment.apiUrl}/produtos`;

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getPorCategoria(nomeCategoria: string): Observable<Produto2[]> {
    return this.http.get<Produto2[]>(`${this.apiUrl}?categoria=${encodeURIComponent(nomeCategoria)}`);
  }

  getProdutosPorSku(sku: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}?sku=${sku}`);
  }
  
  createProduto(produto: ProdutoBase): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  updateProduto(sku: string, produto: ProdutoBase): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${sku}`, produto);
  }

  deleteProduto(sku: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${sku}`);
  }

  getProdutoPorSku(sku: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${sku}`);
  }
  
  searchProdutos(term: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/search?query=${term}`);
  }
}