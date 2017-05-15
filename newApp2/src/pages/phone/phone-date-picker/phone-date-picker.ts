import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-phone-date-picker',
  templateUrl: 'phone-date-picker.html'
})
export class PhoneDatePickerPage {
  myDate;
  myDateH;
  yearValues;
  mothValues;
  dayValues;

  constructor(private datePicker: DatePicker) {
    let nowDate = new Date();
    this.yearValues = nowDate.getFullYear();
    this.mothValues = nowDate.getMonth() + 1;
    this.dayValues = nowDate.getDate();
    console.log(nowDate.toDateString());
  }

  ionViewDidLoad() {}

  myDatePicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {console.log('Got date: ', date);this.myDate = date},
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  myDatePickerH5(){

  }

}
