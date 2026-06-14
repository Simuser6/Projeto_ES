import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../../../app/core/models/produto.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../envirolment/envirolment';

@Injectable({ providedIn: 'root' })
export class FornecedoresService {
    
    private apiUrl = `${environment.apiUrl}`;

    constructor(private http: HttpClient) {}

    getFornecedores(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.apiUrl}/fornecedores`);
    }

    getFornecedorPorId(id: number): Observable<Produto> {
        return this.http.get<Produto>(`${this.apiUrl}/fornecedores/${id}`);
    }

    createFornecedor(fornecedor: Omit<Produto, 'id'>): Observable<Produto> {
        return this.http.post<Produto>(`${this.apiUrl}/fornecedores`, fornecedor);
    }

    updateFornecedor(id: number, fornecedor: Partial<Produto>): Observable<Produto> {
        return this.http.put<Produto>(`${this.apiUrl}/fornecedores/${id}`, fornecedor);
    }

    deleteFornecedor(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/fornecedores/${id}`);
    }
}