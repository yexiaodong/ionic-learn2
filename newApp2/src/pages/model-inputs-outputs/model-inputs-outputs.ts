import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-model-inputs-outputs',
  templateUrl: 'model-inputs-outputs.html'
})
export class ModelInputsOutputsPage {
  @Input() inputPlaceholder:string;
  @Input() buttonLabel:string;
  @Output() inputText = new EventEmitter<string>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelInputsOutputsPage');
  }
  
  //按钮方法-组件输出
  emitText(text:string){
    this.inputText.emit(text);
  }

}
