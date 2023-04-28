import { Component, OnInit } from '@angular/core';

import { Cafe } from './Cafe';
import { CafeService } from './Cafe.service';

@Component({
  selector: 'app-Cafe',
  templateUrl: './Cafe.component.html',
  styleUrls: ['./Cafe.component.css']
})
export class CafeComponent implements OnInit {
  cafes: Array<Cafe> = [];
  cafeOrigen: number = 0;
  cafesBlend: number = 0;

  constructor(
    private servicioCafe: CafeService
  ) { }

  ngOnInit() {
    this.getCafes();
  }

  getCafes() {
    this.servicioCafe.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      for (let cafe in cafes) {
        if (cafes[cafe].tipo === "Café de Origen") {
          this.cafeOrigen += 1;
        }
        if (cafes[cafe].tipo === "Blend") {
          this.cafesBlend += 1;
        }
      }
    });
  }
}
