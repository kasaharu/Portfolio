import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface Blog {
  name: string;
  url: string;
}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsComponent implements OnInit {
  constructor() {}
  readonly blogs: Blog[] = [
    { name: 'はてなブログ', url: 'https://kasaharu.hatenablog.com/' },
    { name: 'Medium', url: 'https://medium.com/@kasaharu' },
    { name: 'Qiita', url: 'https://qiita.com/kasaharu' },
  ];

  ngOnInit() {}
}
