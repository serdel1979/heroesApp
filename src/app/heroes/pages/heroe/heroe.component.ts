import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
`]
})
export class HeroeComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private heroeService: HeroesService, private router: Router ) { }


  public heroe!: Heroe;

  ngOnInit(): void {
    this.activateRoute.params.
    pipe(
      switchMap(({ id })=> this.heroeService.getHeroe(id))
    ).
    subscribe(heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
