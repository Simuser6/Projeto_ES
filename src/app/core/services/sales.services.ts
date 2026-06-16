import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venda, ItemVenda } from '../models/venda.models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SalesService {
  private apiUrl = `${environment.apiUrl}/vendas`;

  constructor(private http: HttpClient) {}

  getVendas(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.apiUrl);
  }

  getVendaPorId(id: number): Observable<Venda> {
    return this.http.get<Venda>(`${this.apiUrl}/${id}`);
  }

  createVenda(venda: Omit<Venda, 'id' | 'dataHora' | 'status'>): Observable<Venda> {
    return this.http.post<Venda>(this.apiUrl, venda);
  }

  confirmVenda(id: number): Observable<Venda> {
    return this.http.post<Venda>(`${this.apiUrl}/${id}/confirm`, {});
  }

  getVendasPorStatus(status: string): Observable<Venda[]> {
    return this.http.get<Venda[]>(`${this.apiUrl}/status/${encodeURIComponent(status)}`);
  }

  cancelarVenda(id: number, motivo?: string): Observable<void> {
    const body = motivo ? { motivo } : {};
    return this.http.post<void>(`${this.apiUrl}/${id}/cancel`, body);
  }
}
