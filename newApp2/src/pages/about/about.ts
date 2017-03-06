import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModelInputsOutputsPage } from '../model-inputs-outputs/model-inputs-outputs';
import { ModelInputsOutputsListPage } from '../model-inputs-outputs-list/model-inputs-outputs-list';
import { UiSegmentPage } from "../ui-segment/ui-segment";
import { UiSegmentSliderPage } from "../ui-segment-slider/ui-segment-slider";

interface Todo {
  completed: boolean;
  label: string;
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  todos:Todo[] = [];
  name:string = 'yexd';
  pageItems = [
    {name:"segment，分类列表-入门",page:UiSegmentPage},
    {name:"segment，分类列表-滑动",page:UiSegmentSliderPage}
  ];
  constructor(public navCtrl: NavController) {

  }

  addTodo(label:string){
    this.todos.push({
      label,
      completed:false
    });
  }

  toggleCompletion(todo:Todo){
    todo.completed = !todo.completed;
  }

  //打开页面
  viewItem(page){
    this.navCtrl.push(page);
  }
}
