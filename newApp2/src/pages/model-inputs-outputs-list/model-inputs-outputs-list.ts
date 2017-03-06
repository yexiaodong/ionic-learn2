import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

interface Todo {
  completed: boolean;
  label: string;
}

@Component({
  selector: 'page-model-inputs-outputs-list',
  templateUrl: 'model-inputs-outputs-list.html'
})
export class ModelInputsOutputsListPage {
  @Input() todos:Todo[];
  @Output() toggle = new EventEmitter<Todo>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelInputsOutputsListPage');
  }

  toggleCompletion(index:number){
    let todo = this.todos[index];
    this.toggle.emit(todo);
  }

}
