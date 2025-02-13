import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LandingPageScreenComponent } from './landing-page-screen.component';

describe('LandingPageScreenComponent', () => {
  let component: LandingPageScreenComponent;
  let fixture: ComponentFixture<LandingPageScreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LandingPageScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
