import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private location: Location) {}

  voltar(): void {
    this.location.back();
  }
}