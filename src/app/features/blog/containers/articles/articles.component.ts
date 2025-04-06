import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';
import { ArticleUsecase } from '../../applications/article.usecase';
import { ArticleComponent } from '../../ui/article/article.component';
import { ArticleStore } from './article.store';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArticleStore, ArticleUsecase],
  imports: [PageTitleComponent, NgIf, NgFor, ArticleComponent],
})
export class ArticlesComponent implements OnInit {
  private readonly store = inject(ArticleStore);
  private readonly _usecase = inject(ArticleUsecase);

  articles = this.store.items;

  ngOnInit(): void {
    this._usecase.fetchFeed();
  }
}
