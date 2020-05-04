import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit {
  title = 'carrito';
  power = 10;

  constructor() {}

  ngOnInit(): void {}
}
