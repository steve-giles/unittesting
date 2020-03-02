import { Component } from '@angular/core';
import {CommonCoreDataService} from './common-core-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unittesting';
  rowData: any ;

  constructor(private commonCoreDataService: CommonCoreDataService) {
    this.getCommonCoreDataByYear();
  }


  public getCommonCoreDataByYear() {
    this.commonCoreDataService.getCommonCoreDataByYear('2016')
      .subscribe(schools => {
        this.rowData = schools;
      });
  }
}
