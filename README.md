# Interaktywna Galeria Obrazów

## Opis projektu

Zadanie polega na stworzeniu interaktywnej galerii obrazów przy użyciu Angulara. Galeria ma wyświetlać kolekcję zdjęć, a po kliknięciu na wybrane zdjęcie powinien pokazać się jego powiększony widok z dodatkowym opisem.

## Zadanie do wykonania

1. Uzupełnij plik `gallery.component.ts`:

   - Dodaj dekorator `@ViewChild` do uzyskania dostępu do kontenera galerii

2. Uzupełnij plik `gallery.component.html`:

   - Użyj dyrektywy `*ngIf`, aby kontrolować, kiedy ma być wyświetlana siatka z miniaturami, a kiedy widok szczegółowy
   - Użyj dyrektywy `*ngFor`, aby iterować po tablicy obrazów
   - Poprawnie powiąż komponenty za pomocą `[input]` i `(output)`

3. Uzupełnij plik `image-card.component.ts`:

   - Dodaj dekorator `@Input` do przyjęcia danych obrazu z komponentu nadrzędnego
   - Dodaj dekorator `@Output` z `EventEmitter`, aby emitować zdarzenie kliknięcia
   - Uzupełnij metodę `onSelect()` aby emitowała zdarzenie do komponentu nadrzędnego

4. Uzupełnij plik `image-card.component.html`:

   - Użyj wiązania danych (`[src]`, `[alt]`) aby wyświetlić obraz
   - Użyj interpolacji (`{{ }}`) aby wyświetlić tytuł obrazu

5. Uzupełnij plik `detail-card.component.ts`:

   - Dodaj dekorator `@Input` do przyjęcia danych obrazu z komponentu nadrzędnego
   - Dodaj dekorator `@Output` z `EventEmitter`, aby emitować zdarzenie zamknięcia
   - Uzupełnij metodę `onClose()` aby emitowała zdarzenie do komponentu nadrzędnego

6. Uzupełnij plik `detail-card.component.html`:
   - Użyj wiązania danych (`[src]`, `[alt]`) aby wyświetlić powiększony obraz
   - Użyj interpolacji (`{{ }}`) aby wyświetlić tytuł i opis obrazu

## Struktura projektu

```
interactive-gallery/
├── src/
│   ├── app/
│   │   ├── gallery/
│   │   │   ├── gallery.component.ts
│   │   │   ├── gallery.component.html
│   │   │   └── gallery.component.css
│   │   ├── image-card/
│   │   │   ├── image-card.component.ts
│   │   │   ├── image-card.component.html
│   │   │   └── image-card.component.css
│   │   ├── detail-card/
│   │   │   ├── detail-card.component.ts
│   │   │   ├── detail-card.component.html
│   │   │   └── detail-card.component.css
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.module.ts
│   └── ...
└── ...
```

## Podpowiedzi

W plikach znajdują się komentarze `TODO:`, które pomogą ci zlokalizować miejsca, gdzie należy wprowadzić zmiany.

## Oczekiwany rezultat

Po zakończeniu zadania, powinieneś zobaczyć:

1. Siatkę z miniaturami obrazów, które wyświetlają się w formie kart z tytułami
2. Po kliknięciu na wybrany obraz, powinien się pokazać pełnoekranowy widok z większym obrazem, tytułem i opisem
3. Po kliknięciu przycisku zamknięcia, powinien ponownie wyświetlić się widok galerii

#

![alt text](https://i.imgur.com/NaewFIA.png)

