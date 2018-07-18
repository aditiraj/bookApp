import { Book } from "./book.model";
import { Author } from "./author.model";
import { Subject } from "rxjs/Subject";

export class BookService{
    booksChanged= new Subject<Book[]>();
    showDetails= new Subject<boolean>();
    private books: Book[]= [
        {title:'All about something', author:new Author(1,"Dan Victor","Rusu",new Date(),"Something about this author. Blablabla..."), ISBN:0}       
    ];
    constructor(){}
    getBooks(){
        return this.books.slice();
    }
    addBook(book:Book){
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
    }
    deleteBook(index:number){
        this.books.splice(index,1);
        this.booksChanged.next(this.books.slice());
    }
    getDetail(index:number){
        return this.books[index];
    }
}