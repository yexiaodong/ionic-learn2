import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the TimePipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'time-pipe'
})
@Injectable()
export class TimePipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    value = value + ''; // make sure it's a string
    return value.toLowerCase();
  }
}
