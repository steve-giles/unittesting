import {TestBed, async, ComponentFixture, fakeAsync} from '@angular/core/testing';
import {AppComponent } from './app.component';
import {CommonCoreDataService} from './common-core-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import * as _ from "lodash";
import {instance, mock, when} from 'ts-mockito';
import {of} from 'rxjs';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const MockCommonCoreDataService = mock(CommonCoreDataService)

  // mock data
  const schools2016 = _.clone(require('./../test/schools_2016.json'));
  const schools2015 = _.clone(require('./../test/schools_2015.json'));

  // mock scenarios
  when(MockCommonCoreDataService.getCommonCoreDataByYear('2016')).thenReturn(of(schools2016));
  when(MockCommonCoreDataService.getCommonCoreDataByYear('2015')).thenReturn(of(schools2015));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        CommonCoreDataService,
        HttpClient,
        HttpHandler,
        {
          provide: CommonCoreDataService,
          useValue: instance(MockCommonCoreDataService)
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unittesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Unit testing');
  });

  it('should retrieve a list of schools for a specific year', () => {
    const yearIs2015 = (currentValue) => currentValue.year === 2015;

    component.getCommonCoreDataByYear('2015');

    expect(component.rowData.every(yearIs2015)).toBeTruthy();
  });
});
