import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports:[MatIconModule, FlexLayoutModule,MatDialogModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500, style({ opacity: 2 })),
      ]),
    ]),
  ],
})
export class InicioComponent {
  constructor(public dialog: MatDialog) {}
  abrirImagen(imagen: string): void {
    this.dialog.open(ImagenDialogComponent, {
      data: { imagenURL: imagen }
    });
  }
}
@Component({
  selector: 'imagen-dialog',
  template: '<img [src]="data.imagenURL" style="width: 900px;">',
})
export class ImagenDialogComponent {
  constructor(public dialogRef: MatDialogRef<ImagenDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
}
