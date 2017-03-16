import { Pipe,PipeTransform } from '@angular/core';
@Pipe({name:'sexPipe'})//定义通道名称
export class SexPipe implements PipeTransform{
  //实现接口类方法
  transform(val:string):string{
    switch (val){
      case 'male':return '男';
      case 'female':return '女';
      default:return '为知性别';
    }
  }
}
