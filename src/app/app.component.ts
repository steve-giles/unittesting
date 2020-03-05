import {Component, OnInit} from '@angular/core';
import {CommonCoreDataService} from "./common-core-data.service";
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Unit testing";
  rowData: any ;
  searchYear = "2016";
  filterGrade = "";

  constructor(private commonCoreDataService: CommonCoreDataService,) {
  }

  ngOnInit() {
    this.getCommonCoreDataByYear("2016");
  }

  /**
   * Filters data by highest grade offered
   * @param grade to filter data
   */
  public filter(grade: string) {
    if (this.rowData && this.rowData.length > 0) {
      this.rowData = this.rowData.filter(data =>
        data.highest_grade_offered === +grade);
    }
    else {
      throwError("No data to filter");
    }
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
