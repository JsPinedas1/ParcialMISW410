import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';

import { Cafe } from './Cafe';
import { CafeService } from './Cafe.service';
import { ListarCafeComponent } from '../listar-cafe/ListarCafe.component';

describe("ListarCafeComponent", () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarCafeComponent ],
      providers: [ CafeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;

    let cafes: Array<Cafe> = [];
    let tiposCafe = [
      "Café de Origen",
      "Blend"
    ];
    let random = Math.floor(Math.random()*tiposCafe.length);

    for(let i = 0; i < 3; i++) {
      const registroCafe = new Cafe(
        faker.datatype.number(),
        faker.lorem.sentence(),
        tiposCafe[random],
        faker.address.city(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.image.avatar()
      );
      cafes.push(registroCafe);
    }

    component.cafes = cafes;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("Deber\u00eda estar creado", () => {
    expect(component).toBeTruthy();
  });

  it("El componente tiene al menos una tabla", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it("El componente tiene al menos un registro", () => {
    expect(debug.query(By.css("tr")).childNodes.length).toBeGreaterThan(0);
  });

  it("El componente tiene al menos una celda", () => {
    expect(debug.query(By.css("td")).childNodes.length).toBeGreaterThan(0);
  });

  it("El componente tiene tres elementos más el encabezado", () => {
    expect(debug.queryAll(By.css("tr"))).toHaveSize(4);
  });

 });
