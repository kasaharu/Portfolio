import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Article } from '../../domain/feed';
import { ArticleComponent } from './article.component';

@Component({
  template: '<app-article [feedItem]="item"></app-article>',
})
class TestHostComponent {
  item: Article = { title: 'テストブログ', categories: [], link: '', publishDate: '' };
}

describe('FeedItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let feedItemElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ArticleComponent, TestHostComponent],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    feedItemElement = fixture.debugElement.query(By.css('app-article')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(feedItemElement).toBeTruthy();
  });
});
