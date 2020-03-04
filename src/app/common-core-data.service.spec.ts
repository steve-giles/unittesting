import {TestBed} from '@angular/core/testing';
import {CommonCoreDataService} from './common-core-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import * as _ from "lodash";

describe('CommonCoreDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
      ]
  }));

  it('should be created', () => {
    const assignment = _.clone(require('./../test/schools.json'));

    const service: CommonCoreDataService = TestBed.get(CommonCoreDataService);
    expect(service).toBeTruthy();
  });

  it('should build a url to query service', () => {

  });

  it('should get a list of schools when retrieving schools by year', () => {
    //todo need to mock httpget

  })
});
