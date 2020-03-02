import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonCoreDataService {

  private baseUrl = 'https://educationdata.urban.org/api/v1/schools/ccd/directory/';

  constructor(private http: HttpClient) { }

  private buildUrl(year: string) {
    return this.baseUrl + year;
  }

  getCommonCoreDataByYear(year: string): Observable<any> {
    const url = this.buildUrl(year);
    return this.http.get(url);
  }

}
