import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categoria } from '../../../app/core/models/categoria.models';

@Injectable({ providedIn: 'root' })
export class CategoriaService {

  private categorias: Categoria[] = [
    { nome: 'Placa-Mãe',       quantidade: 142, icon: 'developer_board', bgColor: '#FFF0E6', iconColor: '#E8650A' },
    { nome: 'Placas de Vídeo', quantidade: 387, icon: 'memory',          bgColor: '#F0EDE8', iconColor: '#3A3A3C' },
    { nome: 'Processadores',   quantidade: 219, icon: 'cpu',             bgColor: '#E6F5F0', iconColor: '#0F6E56' },
    { nome: 'Memórias RAM',    quantidade: 98,  icon: 'sim_card',        bgColor: '#E6F0FA', iconColor: '#185FA5' },
    { nome: 'SSD',             quantidade: 564, icon: 'sd_card',         bgColor: '#FFF0E6', iconColor: '#E8650A' },
    { nome: 'HDD',             quantidade: 76,  icon: 'storage',         bgColor: '#F5EAF0', iconColor: '#993556' },
    { nome: 'Cabos',           quantidade: 105, icon: 'cable',           bgColor: '#F0F5E6', iconColor: '#3B6D11' },
    { nome: 'Monitores',       quantidade: 61,  icon: 'monitor',         bgColor: '#F0EDE8', iconColor: '#3A3A3C' },
  ];

  getCategorias(): Observable<Categoria[]> {
    return of(this.categorias);
  }
}