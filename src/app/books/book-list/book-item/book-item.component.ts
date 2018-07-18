import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book.model';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book:Book;
  @Input() index:number;

  constructor(private bookService:BookService) { }

  ngOnInit() {  
  }

  onDelete(){
    this.bookService.deleteBook(this.index); 
  }

}
