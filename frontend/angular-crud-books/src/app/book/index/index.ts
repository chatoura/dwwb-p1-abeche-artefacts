import { Component } from '@angular/core';
import { BookService } from '../book-service';
import { BookInterface } from '../book-interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
books: BookInterface[] = [];

constructor(public bookService: BookService, private router:Router){}

ngOnInit(){
  console.log(this.router.url)
  this.bookService.getAll().subscribe((data:BookInterface[])=>{
    console.log("Data:::", data)
    this.books = data;
    console.log("Books:::", this.books);
  })
}
}
