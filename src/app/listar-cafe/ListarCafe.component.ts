import { Component, Input, OnInit } from '@angular/core';

import { Cafe } from '../cafe/Cafe';

@Component({
  selector: 'app-ListarCafe',
  templateUrl: './ListarCafe.component.html',
  styleUrls: ['./ListarCafe.component.css']
})
export class ListarCafeComponent implements OnInit {

  @Input() cafes!: Array<Cafe>;

  constructor() { }

  ngOnInit() {
  }

}
