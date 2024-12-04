import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSharedComponentsComponent } from './ui-shared-components.component';

describe('UiSharedComponentsComponent', () => {
  let component: UiSharedComponentsComponent;
  let fixture: ComponentFixture<UiSharedComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSharedComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSharedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
