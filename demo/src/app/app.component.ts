import { Component } from '@angular/core';
//裝飾器
@Component({
  //至主頁面尋找<app-root></app-root>標籤
  selector: 'app-root',
  //創建templateUrl指定的頁面實例並插入selector標籤中
  templateUrl: './app.component.html',
  //本組建css樣式
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //組件的所有數據皆作為此class的屬性儲存在此
  //若該元件有title屬性,會帶入此處所賦予的值
  title = 'Angular';
}
