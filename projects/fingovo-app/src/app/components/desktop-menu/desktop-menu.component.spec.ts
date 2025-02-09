import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopMenuComponent } from './desktop-menu.component';

describe('DesktopMenuComponent', () => {
  let component: DesktopMenuComponent;
  let fixture: ComponentFixture<DesktopMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DesktopMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
