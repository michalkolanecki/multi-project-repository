import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiSharedElementsComponent } from './ui-shared-elements.component';

describe('UiSharedElementsComponent', () => {
  let component: UiSharedElementsComponent;
  let fixture: ComponentFixture<UiSharedElementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UiSharedElementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSharedElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
