import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  num: number | null = null;
  resultado: string = '';

  compruebaSiEsPar() {
    if (this.num !== null) {
      if (this.num % 2 === 0) {
        this.resultado = `El número ${this.num} es par.`;
      } else {
        this.resultado = `El número ${this.num} es impar.`;
      }
    } else {
      this.resultado = 'Introduce un número válido.';
    }
  }

  reiniciar() {
    this.num = null;
    this.resultado = '';
  }
}
