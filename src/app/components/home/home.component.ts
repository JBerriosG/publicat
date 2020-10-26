import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = [];
  servicio: any;
  servicios = [];
  soluciones = [];
  trabajos = [];
  interval: any;
  interval2: any;
  clientes = [];
  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      fono: new FormControl(null, [Validators.required]),
      msg: new FormControl(null)
    });


    this.trabajos = [{
      name: 'LETREROS LUMINOSOS',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    },
    {
      name: 'EMPAVONADOS',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    },
    {
      name: 'SEÑALETICAS',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    },
    {
      name: 'SUBLIMACION',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    },
    {
      name: 'LETRERO EN ACERO',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    },
    {
      name: 'PENDONES',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    },
    {
      name: 'ADHESIVOS',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    },
    {
      name: 'ROTULADO VEHICULAR',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    },
    {
      name: 'PAPELERIA',
      image: '../../../assets/img/img/slide1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex id tempora fuga labore quam qui error neque voluptatem dicta vel expedita deleniti accusantium incidunt culpa, deserunt soluta sint nobis.'
    }
    ];

    this.clientes = [
      {
        name: 'MUNICIPALIDAD DE COPIAPÓ',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'MINERA CANDELARIA',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'AGUAS CHAÑAR',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      },
      {
        name: 'PUCOBRE',
        image: '../../../assets/img/img/slide1.jpg',
      }
    ];

    window.onscroll = function () {
      if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
          .classList.add('showUp');
      } else {
        document.querySelector('.go-top-container')
          .classList.remove('showUp');
      }
    }
    document.querySelector('.go-top-container')
      .addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      });

  }

  onSubmit() {

  }

}
