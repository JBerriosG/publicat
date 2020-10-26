import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  soluciones = [];
  constructor() { }

  ngOnInit(): void {
    this.soluciones = [{
      name:'imagen 1',
      description: 'imagen de prueba 1',
      urlImage:'../../assets/img/slide1.jpg'
    },
    {
      name:'imagen 2',
      description: 'imagen de prueba 2',
      urlImage:'../../assets/img/slide2.jpg'
    },
    {
      name:'imagen 3',
      description: 'imagen de prueba 3',
      urlImage:'../../assets/img/slide3.jpg'
    }];

  }



}
