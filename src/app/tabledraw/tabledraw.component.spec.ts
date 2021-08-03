import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledrawComponent } from './tabledraw.component';

describe('TabledrawComponent', () => {
  let component: TabledrawComponent;
  let fixture: ComponentFixture<TabledrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabledrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabledrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
