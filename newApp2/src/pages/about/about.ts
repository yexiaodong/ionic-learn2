import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModelInputsOutputsPage } from '../model-inputs-outputs/model-inputs-outputs';
import { ModelInputsOutputsListPage } from '../model-inputs-outputs-list/model-inputs-outputs-list';
import { UiSegmentPage } from "../ui-segment/ui-segment";
import { UiSegmentSliderPage } from "../ui-segment-slider/ui-segment-slider";
import { UiListPage } from '../ui-list/ui-list';
import { UiListAdvancedPage } from '../ui-list-advanced/ui-list-advanced';
import { UiListAdvancedImgPage } from '../ui-list-advanced-img/ui-list-advanced-img';

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
    {name:"segment，分类列表-滑动",page:UiSegmentSliderPage},
    {name:"item，列表成员-初级",page:UiListPage},
    {name:"item，列表成员-中级",page:UiListAdvancedPage},
    {name:"item，列表成员-高级（图片）",page:UiListAdvancedImgPage}
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
