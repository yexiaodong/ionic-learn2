import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//数据持久化
@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Hello DataService Provider');
  }

}
