import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpandedBookDTO, ReviewedBookDTO } from '../../book';
import { MatDialog } from '@angular/material/dialog';
import { ViewBookComponent } from '../view-book/view-book.component';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.css']
})
export class BooksListItemComponent {
  @Input() book?: ReviewedBookDTO;
  @Output() editClicked = new EventEmitter<number>();

  constructor(private booksService: BooksService, private matDialog: MatDialog ) {

  }

  OpenDialogWindow() : void {
    if(this.book)
      this.matDialog.open(ViewBookComponent, {
        width: '60%',
        height: '80vh',
        data: this.booksService.get<ExpandedBookDTO>(`api/books/${this.book.id}`)
      });
  }
}
