import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() src = 'https://via.placeholder.com/100?text=dummy';
  @Input() alt = 'dummy';
}
