import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pais: string = '';
  paisSecreto: { nombre: string; continente: string } = this.paisAleatorio();
  pista: string = 'Introduce el nombre de un país para comenzar';
  acierto: boolean = false;

  constructor() {
    console.log("El país secreto es: " + this.paisSecreto.nombre);
  }

  paisAleatorio() {
    const paises = [
      { nombre: 'España', continente: 'Europa' },
      { nombre: 'México', continente: 'América' },
      { nombre: 'Japón', continente: 'Asia' },
      { nombre: 'Egipto', continente: 'África' },
      { nombre: 'Australia', continente: 'Oceanía' },
    ];
    return paises[Math.floor(Math.random() * paises.length)];
  }

  compruebaPais() {
    if (this.pais.trim().toLowerCase() === this.paisSecreto.nombre.toLowerCase()) {
      this.acierto = true;
      this.pista = `¡Correcto! El país secreto es ${this.paisSecreto.nombre}`;
    } else if (this.pais) {
      this.pista = `El país secreto está en el continente ${this.paisSecreto.continente}`;
    }
  }

  reiniciar() {
    this.pais = '';
    this.acierto = false;
    this.pista = 'Introduce el nombre de un país para comenzar';
    this.paisSecreto = this.paisAleatorio();
    console.log("El país secreto es: " + this.paisSecreto.nombre);
  }
}
