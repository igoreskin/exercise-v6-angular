import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs-compat/Subject';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  constructor(private http: HttpClient) { }

  private callAccountSource = new Subject<any>();
  private callCashSource = new Subject<any>();

  accountMethodCalled$ = this.callAccountSource.asObservable(); // this observable is subscribed to in table.component

  cashMethodCalled$ = this.callCashSource.asObservable()

  getAccounts() {
    return this.http.get('../assets/accounts.json');
  }

  // This method is called from header.component: 
  sortAccounts() {
    this.callAccountSource.next();
  }

  sortCash() {
    this.callCashSource.next();
  }


}
