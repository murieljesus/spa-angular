import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DrawdetailComponent } from './drawdetail.component';

describe('DrawdetailComponent', () => {
  let component: DrawdetailComponent;
  let fixture: ComponentFixture<DrawdetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
