import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Blog } from '../../domain/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsComponent {
  readonly blogs: Blog[] = [
    { name: 'はてなブログ', url: 'https://kasaharu.hatenablog.com/' },
    { name: 'Medium', url: 'https://medium.com/@kasaharu' },
    { name: 'Qiita', url: 'https://qiita.com/kasaharu' },
  ];
}
