import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookDTO } from 'src/book.js';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, firstValueFrom } from 'rxjs';
import { FileInput } from 'ngx-material-file-input';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  header: 'Add' | 'Edit' = 'Add';

  bookId: number | null = null;

  book: BookDTO = {} as BookDTO;
  cover: FileInput | null = null;
  
  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router) { }

  private subscribe!: Subscription;
  ngOnInit(): void {
    this.subscribe = this.route.params.subscribe(params=> {
      this.bookIdChange(params['id'])
    });
  }

  bookIdChange(id: number | null) {
    this.bookId = id;
    if(this.bookId == null) {
      this.book = {} as BookDTO;
      this.header = 'Add';
    }
    else {
      this.booksService.get<BookDTO>('api/books/' + this.bookId).subscribe(b => this.book = b);
      this.header = 'Edit';
    }
  }

  onClearClick() {
    this.subscribe.unsubscribe();
    this.router.navigate(['/']);
    this.bookIdChange(null);
    this.cover = null;
  }

  async onEditAddClick() {
    if(this.cover) {
      const cover = await new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.readAsDataURL(this.cover?.files[0]!)
        fr.onload = () => resolve(fr.result as string);
        fr.onerror = (e) => reject(e);
      }) as string;
  
      this.book.cover = cover;
    }

    this.booksService.post('api/books/save', this.book);
    this.onClearClick();
  }
}
