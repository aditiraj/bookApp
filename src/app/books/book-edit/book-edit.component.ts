import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm(){
    this.bookForm= new FormGroup({
      'id': new FormControl(''),
      'title': new FormControl('',Validators.required),
      'author': new FormControl('',Validators.required),
      'publisher': new FormControl(''),
      'edition': new FormControl(''),
      'isbn': new FormControl('',Validators.required),
      'publishingDate': new FormControl(''),
      'chapters': new FormArray([])
    });
  }

  onSubmit(){
    const newBook= {
      id: this.bookForm.value['id'],
      title: this.bookForm.value['title'],
      author: this.bookForm.value['author'],
      publisher: this.bookForm.value['publisher'],
      edition: this.bookForm.value['edition'],
      ISBN: this.bookForm.value['isbn'],
      publishingDate: this.bookForm.value['publishingDate'],
      chapters: this.bookForm.value['chapters']
    };
    this.bookService.addBook(newBook);
    this.router.navigate(['']);
  }

  onCancel(){
    this.router.navigate(['']);
  }

}
