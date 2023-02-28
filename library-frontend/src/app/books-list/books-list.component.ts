import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReviewedBookDTO } from '../../book';
import { Observable, of } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list', 
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books!: Observable<ReviewedBookDTO[]>;
  recommended!: Observable<ReviewedBookDTO[]>;

  constructor(private booksService: BooksService) {
   
  }
  ngOnInit(): void {
    this.books = this.booksService.get<ReviewedBookDTO[]>('api/books');
    this.recommended = this.booksService.get<ReviewedBookDTO[]>('api/recommended');
  }
}
