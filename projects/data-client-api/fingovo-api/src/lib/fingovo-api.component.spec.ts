import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FingovoApiComponent } from './fingovo-api.component';

describe('FingovoApiComponent', () => {
  let component: FingovoApiComponent;
  let fixture: ComponentFixture<FingovoApiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FingovoApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FingovoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
