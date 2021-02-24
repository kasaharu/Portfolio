import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ArticleStore } from '../containers/article/article.store';
import { ArticleUsecase } from './article.usecase';

describe('ArticleUsecase', () => {
  let usecase: ArticleUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleUsecase, ArticleStore],
    });
    usecase = TestBed.inject(ArticleUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
