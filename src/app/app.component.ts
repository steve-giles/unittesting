import {Component, OnInit} from '@angular/core';
import {CommonCoreDataService} from "./common-core-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Unit testing";
  rowData: any ;
  searchYear = "2016";
  searchGrade = "12";

  constructor(private commonCoreDataService: CommonCoreDataService,) {

  }

  ngOnInit() {
    this.getCommonCoreDataByYear("2016");
  }

  public filter(grade: any) {
    this.rowData = this.rowData.filter(data =>
      data.highest_grade_offered === +grade.target.value);
  }

  /**
   * Retrieves common core data by year
   * @param year to retrieve data for
   */
  public getCommonCoreDataByYear(year: string) {
    this.commonCoreDataService.getCommonCoreDataByYear(year)
      .subscribe(schools => {
        this.rowData = schools.results;
      });


  }
}
