import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-molecule-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() image: string;
}
