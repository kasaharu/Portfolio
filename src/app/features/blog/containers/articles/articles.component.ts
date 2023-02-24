import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ArticleUsecase } from '../../applications/article.usecase';
import { ArticleStore } from './article.store';
import { ArticleComponent } from '../../ui/article/article.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArticleStore, ArticleUsecase],
  standalone: true,
  imports: [PageTitleComponent, NgIf, NgFor, ArticleComponent, AsyncPipe],
})
export class ArticlesComponent implements OnInit {
  constructor(private readonly _componentStore: ArticleStore, private _usecase: ArticleUsecase) {}
  articles$ = this._componentStore.blogItems$;

  ngOnInit(): void {
    this._usecase.fetchFeed();
  }
}
