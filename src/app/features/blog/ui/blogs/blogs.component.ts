import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
