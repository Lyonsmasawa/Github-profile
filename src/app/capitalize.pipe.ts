import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let letter = value.substr(0, 1).toUpperCase();
    return letter + value.substr(1);
  }

}
