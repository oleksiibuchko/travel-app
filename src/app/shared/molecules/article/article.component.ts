import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-molecule-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() text;
}
