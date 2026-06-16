import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../models/produto.models';
import { MOCK_PRODUCT } from '../mocks/product.mock';

@Injectable({ providedIn: 'root' })
export class ProductMockService {
  getProdutoPorId(id: number): Observable<Produto> {
    return of({ ...MOCK_PRODUCT, nome: `${MOCK_PRODUCT.nome} (${id})` });
  }
}
