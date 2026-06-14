import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../../../app/core/models/produto.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../envirolment/envirolment';

@Injectable({ providedIn: 'root' })
export class StockService {
  private apiUrl = `${environment.apiUrl}/estoque`;

  constructor(private http: HttpClient) {}

  getEstoque(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getEstoquePorSku(sku: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}?sku=${sku}`);
  }

  adjustQuantidade(sku: string, quantidade: number): Observable<Produto> {
    return this.http.patch<Produto>(`${this.apiUrl}/${sku}/ajustar-quantidade`, { quantidade });
  }

  registrarEntrada(sku: string, quantidade: number): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}/${sku}/entrada`, { quantidade });
  }

  registrarSaida(sku: string, quantidade: number): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}/${sku}/saida`, { quantidade });
  }
  
}