import { TestBed } from '@angular/core/testing';

import { CommonCoreDataService } from './common-core-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('CommonCoreDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
      ]
  }));

  it('should be created', () => {
    const service: CommonCoreDataService = TestBed.get(CommonCoreDataService);
    expect(service).toBeTruthy();
  });
});
