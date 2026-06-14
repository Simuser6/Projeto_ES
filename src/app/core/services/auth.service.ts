import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Usuario } from "../models/usuário.models";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}`;
  private usuarioLogadoSubject = new BehaviorSubject<Usuario | null>(this.getUsuarioAtual());
  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { login: string; senha: string }): Observable<Usuario> {
    return this.http.post<{ token: string; usuario: Usuario }>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('usuario', JSON.stringify(response.usuario));
          this.usuarioLogadoSubject.next(response.usuario);
        }),
        map(response => response.usuario)
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('usuario');
    this.usuarioLogadoSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUsuarioAtual(): Usuario | null {
    const usuarioJson = localStorage.getItem('usuario');
    return usuarioJson ? JSON.parse(usuarioJson) as Usuario : null;
  }

  refreshToken(): Observable<string> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/refresh-token`, {})
      .pipe(
        tap(response => {
          localStorage.setItem('authToken', response.token);
        }),
        map(response => response.token)
      );
  }
}
