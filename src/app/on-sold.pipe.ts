import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSold'
})
export class OnSoldPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('value = ', value);
    if(value == 1) {
      return 'Sold';
    }else {
      return 'On sale';
    }
  }

}
