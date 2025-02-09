import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FingovoFrameComponent } from './fingovo-frame.component';

describe('FingovoFrameComponent', () => {
  let component: FingovoFrameComponent;
  let fixture: ComponentFixture<FingovoFrameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FingovoFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FingovoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
