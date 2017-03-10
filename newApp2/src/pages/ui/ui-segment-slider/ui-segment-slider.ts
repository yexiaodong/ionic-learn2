import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Slides} from 'ionic-angular';

@Component({
  selector: 'page-ui-segment-slider',
  templateUrl: 'ui-segment-slider.html'
})
export class UiSegmentSliderPage {
  @ViewChild('mySlider') slider:Slides;
  selectedSegment:string;
  slides:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSegment = '0';//默认打开
    this.slides = [
      {
        id:"0",
        title:"First Slide"
      },
      {
        id:"1",
        title:"Second Slide"
      },{
        id:"2",
        title:"Third Slide"
      }
    ];
  }

  ionViewDidLoad() {}

  onSegmentChanged(segmentButton){
    this.slider.slideTo(segmentButton.value);
    console.log("Segment change",this.selectedSegment);
  }
  onSlideChanged(slider){
    /*
    *  1.必须转为字符串否则Segment标签样式不对。
    *  2.必须限制slider最大值，否则它会比原有的大1。
     */
    let index = (slider._activeIndex>2?2:slider._activeIndex).toString();
    if(this.selectedSegment != index){
      this.selectedSegment = index;
    }
  }

}
