import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  健康档案测试服务

  Generated class for the EhrService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EhrService {

  constructor() {
    console.log('服务-constructor');
  }

  ionViewDidLoad() { //无效，原因服务没有页面
    console.log('服务-ionViewDidLoad');
  }

  test(){
    console.log('服务-test');
  }

}
