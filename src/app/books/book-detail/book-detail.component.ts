import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id:number;
  bookDetail:Book;

  constructor(private router:Router, private route:ActivatedRoute, 
              private bookService:BookService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id= +params['id'];
      this.bookDetail= this.bookService.getDetail(this.id);
    });

  }
  onClose(){
    this.router.navigate(['']);
  }

}
