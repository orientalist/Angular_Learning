# Dependency Injection(相依性注入)
1. 目的:解耦
2. 將Component與Service分離
3. Component負責應用邏輯,Service負責獲取/存儲數據
4. 相依性注入為二者間的橋樑
***
## 非DI缺點
1. 違反高內聚,低耦合
2. 重複建立物件(浪費資源)
3. 一經修改,全部修改
4. 不利於單元測試
***
## Angular中使用DI注入Service
1. `ng g s Service名稱`-透過CLI建立Service
2. `import { SomeService } from '../some.service'`-將其引入
3. 在`constructor`終將其作為參數注入
4. 在Angular中,被注入的Service若在不同組件中被使用,會直接返回已建立的實體
```ts
import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service'

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  data:any
  constructor(
    private service:SomeService
  ) { }

  ngOnInit() {
    this.data=this.service.GetData()
    console.log(this.data)
  }

}

```