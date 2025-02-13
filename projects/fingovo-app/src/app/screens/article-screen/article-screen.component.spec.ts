import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleScreenComponent } from './article-screen.component';

describe('ArticleScreenComponent', () => {
  let component: ArticleScreenComponent;
  let fixture: ComponentFixture<ArticleScreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ArticleScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
