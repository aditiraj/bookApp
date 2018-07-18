import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  subscription: Subscription;

  constructor(private bookService:BookService, private router:Router, 
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription= this.bookService.booksChanged.subscribe((books:Book[])=>{
      this.books= books;
    });

    this.books= this.bookService.getBooks();
  }

  onNewBook(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
