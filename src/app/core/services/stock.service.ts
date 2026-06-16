import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../../../app/core/models/produto.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StockService {
  private apiUrl = `${environment.apiUrl}/estoque`;

  constructor(private http: HttpClient) {}

  getEstoque(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getCriticos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/criticos`);
  }

  getEstoquePorProduto(produtoId: number): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/produto/${produtoId}`);
  }

  createEstoque(produtoId: number, quantidade: number, estoqueMinimo: number): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, { produtoId, quantidade, estoque_minimo: estoqueMinimo });
  }

  reporEstoque(produtoId: number, quantidade: number): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}/${produtoId}/repor`, { quantidade });
  }
}
