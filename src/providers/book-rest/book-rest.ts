import { Book } from './../../pages/models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookRestProvider {

  private url:string="https://comscibookshop-api.herokuapp.com"

  constructor(public http: HttpClient) {
    console.log('Hello BookRestProvider Provider');
  }

  getbookList():Observable<any>{
    
    return this.http.get<Book>(this.url + '/books');
  }




}
