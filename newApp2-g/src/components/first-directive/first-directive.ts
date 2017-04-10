import { Directive } from '@angular/core';

/*
  Generated class for the FirstDirective directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[first-directive]' // Attribute selector
})
export class FirstDirective {

  constructor() {
    console.log('Hello FirstDirective Directive');
  }

}
