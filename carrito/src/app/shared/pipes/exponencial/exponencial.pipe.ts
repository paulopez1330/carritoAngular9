import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponencial',
})
export class ExponencialPipe implements PipeTransform {
  transform(value: number): number {
    return Math.pow(value, 2);
  }
}
