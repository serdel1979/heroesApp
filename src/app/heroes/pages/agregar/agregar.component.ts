import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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

  constructor( private heroeService: HeroesService,
                private activateRoute: ActivatedRoute,
                private router: Router ) { }

  ngOnInit(): void {
    this.activateRoute.params.
    pipe(
      switchMap(({id})=> this.heroeService.getHeroe(id))
    ).
    subscribe(
      heroe => this.heroe = heroe
    )
  }

  guardar(){
    if( this.heroe.superhero.trim().length === 0){
      return;
    }
    if(!this.heroe.id){
        this.heroeService.guardarHeroe(this.heroe)
        .subscribe( heroe => this.router.navigate(['/heroes/editar',heroe.id]));
    }else{
        this.heroeService.editaHeroe(this.heroe.id,this.heroe)
        .subscribe(resp=> console.log('Editado ', resp));
    }
  }

}
