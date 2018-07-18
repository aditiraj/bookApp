import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookService } from './books/book.service';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

const routes: Routes=[
  { path:'', component:BooksComponent,children:[
    {path:'new', component:BookEditComponent},
    {path:':id', component:BookDetailComponent}
  ]}
];
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookEditComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
