import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GalleryImage } from '../gallery/gallery.component';

@Component({
  selector: 'app-detail-card',
  standalone: false,
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
})
export class DetailCardComponent {
  // TODO: Użyj dekoratora @Input, aby przyjąć obiekt obrazu z komponentu nadrzędnego

  // TODO: Użyj dekoratora @Output, aby emitować zdarzenie zamknięcia do komponentu nadrzędnego

  onClose(): void {
    // TODO: Emituj zdarzenie zamknięcia
  }
}
