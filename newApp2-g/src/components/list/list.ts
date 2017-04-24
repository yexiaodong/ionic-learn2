import { Component } from '@angular/core';

/*
  Generated class for the List component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  text: string;

  constructor() {
    console.log('Hello List Component');
    this.text = 'Hello World';
  }

}
