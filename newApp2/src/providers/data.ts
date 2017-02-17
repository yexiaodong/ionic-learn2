import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {

  constructor(public storage: Storage) {
  }

  //获取数据
  getData(){
    return this.storage.get('todos');
  }

  //保存数据
  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos',newData)
  }
}
