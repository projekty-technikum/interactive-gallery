import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GalleryImage } from '../gallery/gallery.component';

@Component({
  selector: 'app-image-card',
  standalone: false,
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent {
  // TODO: Użyj dekoratora @Input, aby przyjąć obiekt obrazu z komponentu nadrzędnego

  // TODO: Użyj dekoratora @Output, aby emitować zdarzenie kliknięcia do komponentu nadrzędnego

  onSelect(): void {
    // TODO: Emituj zdarzenie z wybranym obrazem
  }
}
