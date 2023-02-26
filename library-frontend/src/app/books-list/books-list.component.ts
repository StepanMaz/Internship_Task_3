import { Component } from '@angular/core';
import { ReviewedBookDTO } from '../../book';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books: Observable<ReviewedBookDTO[]>;
  recomended: Observable<ReviewedBookDTO[]>;

  constructor() {
    this.books = of([{id: 1, title: 'Some title for book', author: 'Author who did that', cover: 'https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw', content: '1', rating: 11, reviewNumber: 21}, {id: 1, title: '1', author: '1', cover: 'https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw', content: '1', rating: 1, reviewNumber: 2}]);
    this.recomended = of([]);
  }
}
