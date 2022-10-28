import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heroes.interface';

@Pipe({
  name: 'heroeimg'
})
export class HeroeimgPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
