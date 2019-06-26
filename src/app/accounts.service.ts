import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs-compat/Subject';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  constructor(private http: HttpClient) { }

  private callSource = new Subject<any>();

  componentMethodCalled$ = this.callSource.asObservable();

  getAccounts() {
    return this.http.get('../assets/accounts.json');
  }

  sortAscend() {
    this.callSource.next();
  }


}
