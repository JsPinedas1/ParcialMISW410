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

  constructor(
    private servicioCafe: CafeService
  ) { }

  ngOnInit() {
    this.getCafes();
  }

  getCafes() {
    this.servicioCafe.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

}
