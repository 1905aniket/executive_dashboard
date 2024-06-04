import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteDashboardComponent } from './execute-dashboard.component';

describe('ExecuteDashboardComponent', () => {
  let component: ExecuteDashboardComponent;
  let fixture: ComponentFixture<ExecuteDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecuteDashboardComponent]
    });
    fixture = TestBed.createComponent(ExecuteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
