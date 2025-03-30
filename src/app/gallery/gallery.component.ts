import { Component, ViewChild, ElementRef } from '@angular/core';

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  images: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Góry',
      description: 'Piękny krajobraz górski',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Morze i plaża',
      description: 'Spokojna plaża z błękitną wodą i złotym piaskiem',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Las we mgle',
      description: 'Tajemniczy las spowity poranną mgłą',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Miasto nocą',
      description: 'Panorama miasta rozświetlona nocnymi światłami',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Dzikie zwierzęta',
      description: 'Młode kotki odpoczywające razem',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Kwiaty',
      description: 'Kolorowe pole kwiatów w pełnym rozkwicie',
    },
  ];

  selectedImage: GalleryImage | null = null;
  showDetailView = false;

  // TODO: Użyj dekoratora @ViewChild, aby uzyskać dostęp do elementu DOM z referencją #galleryContainer

  onSelectImage(image: GalleryImage): void {
    this.selectedImage = image;
    this.showDetailView = true;
  }

  onCloseDetail(): void {
    this.showDetailView = false;
    this.selectedImage = null;
  }
}
