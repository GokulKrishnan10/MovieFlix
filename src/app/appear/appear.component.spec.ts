import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearComponent } from './appear.component';

describe('AppearComponent', () => {
  let component: AppearComponent;
  let fixture: ComponentFixture<AppearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
