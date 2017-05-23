import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@Component({
  selector: 'page-phone-photo-viewer',
  templateUrl: 'phone-photo-viewer.html'
})
export class PhonePhotoViewerPage {

  constructor(private photoViewer: PhotoViewer) {}

  ionViewDidLoad() {}

  ViewImg(){
    this.photoViewer.show('../assets/image/ionic.png');
  }
  testBtn(){
    console.log('testBtn()');
  }
}
