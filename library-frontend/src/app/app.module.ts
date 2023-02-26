import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksListItemComponent } from './books-list-item/books-list-item.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule }  from '@angular/material/input';
import { MatButtonModule }  from '@angular/material/button';
import { MaterialFileInputModule }  from 'ngx-material-file-input';
import { MatTabsModule }  from '@angular/material/tabs';
import { MatIconModule }  from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BooksListComponent,
    BooksListItemComponent,
    EditBookComponent,
    ViewBookComponent
  ],
  entryComponents: [
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MatDialogModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialFileInputModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
