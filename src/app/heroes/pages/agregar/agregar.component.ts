import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {


  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero : '',
    alter_ego : '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(){
    if( this.heroe.superhero.trim().length === 0){
      return;
    }
    this.heroeService.guardarHeroe(this.heroe)
    .subscribe(resp=> console.log('Agregado ', resp));
  }

}
