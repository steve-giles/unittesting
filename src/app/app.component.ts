import {Component} from "@angular/core";
import {CommonCoreDataService} from "./common-core-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Unit testing";

  rowData: any ;

  constructor(private commonCoreDataService: CommonCoreDataService) {
  }

  public filter(grade: any) {
    this.rowData = this.rowData.results.filter(data =>
      data.highest_grade_offered === +grade.target.value);
  }

  /**
   * Retrieves common core data by year
   * @param year to retrieve data for
   */
  public getCommonCoreDataByYear(year: any) {
    this.commonCoreDataService.getCommonCoreDataByYear(year.target.value)
      .subscribe(schools => {
        this.rowData = schools;
      });


  }
}
