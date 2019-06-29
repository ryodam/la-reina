import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: any[] = [
  {item: 'Humedad', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Peso Especifico', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Temperatura', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Impurezas', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Granos Partidos', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Granos con germen dañadp', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Granos cristalizados', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Granos dañados por calor', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Granos infectados por hongos', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Granos infectados por plagas', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Mezcla de color', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Granos amllaceos', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Olor', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Aflatoxina', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Grano pequeño', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Nivel de infestación', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Grano dañado total', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Grado', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
  {item: 'Observación', rango: '', muestra1: '', muestra2: '', muestra3: '', promedio: ''},
];

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styleUrls: ['./materia-prima.component.scss']
})
export class MateriaPrimaComponent implements OnInit {
  displayedColumns: string[] = ['item', 'rango', 'muestra1', 'muestra2', 'muestra3', 'promedio'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
