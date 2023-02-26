import { Component, Input } from '@angular/core';
import { ReviewedBookDTO } from '../../book';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.css']
})
export class BooksListItemComponent {
  @Input() book?: ReviewedBookDTO;
}
