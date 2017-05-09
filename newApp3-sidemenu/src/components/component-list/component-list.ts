import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'component-list',
  templateUrl: 'component-list.html',
  inputs:['username']//'username',自动匹配成员变量username
})
export class ComponentList {

  username: string;

  @Output()
  myClick = new EventEmitter<string>();

  constructor() {
  }

  onClick(){
    this.myClick.emit('组件参数-yexd');
  }

}
