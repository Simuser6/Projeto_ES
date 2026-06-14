import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venda, ItemVenda } from '../models/venda.models';
import { environment } from '../../../envirolment/envirolment';

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

  updateVenda(id: number, venda: Partial<Venda>): Observable<Venda> {
    return this.http.put<Venda>(`${this.apiUrl}/${id}`, venda);
  }

  deleteVenda(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}