import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BlogItem } from '../../domain/feed';
import { FeedItemComponent } from './feed-item.component';

@Component({
  template: `<app-feed-item [feedItem]="item"></app-feed-item>`,
})
class TestHostComponent {
  item: BlogItem = { title: 'テストブログ', categories: [], link: '', publishDate: '' };
}

describe('FeedItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let feedItemElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedItemComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    feedItemElement = fixture.debugElement.query(By.css('app-feed-item')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(feedItemElement).toBeTruthy();
  });
});
