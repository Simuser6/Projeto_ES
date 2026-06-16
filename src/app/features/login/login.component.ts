import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField, MatLabel } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { MatCard } from "@angular/material/card";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MatFormField, MatIcon, MatLabel, MatCard, RouterModule]
})
export class LoginComponent {

  constructor(private router: Router) {}

  login(): void {
    // Aqui ficará a autenticação futuramente
    this.router.navigate(['/']);
  }
}