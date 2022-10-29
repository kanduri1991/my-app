import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpClient:HttpClient) { }
  getmail():Observable<any>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
}
