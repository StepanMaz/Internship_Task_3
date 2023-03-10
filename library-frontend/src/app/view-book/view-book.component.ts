import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExpandedBookDTO } from '../../book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  constructor(public dialogRef: MatDialogRef<ViewBookComponent>, @Inject(MAT_DIALOG_DATA) public data: Observable<ExpandedBookDTO>) {
  } 

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
