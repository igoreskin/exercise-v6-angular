import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  constructor(private http: HttpClient) { }

  getAccounts() {
    return this.http.get('../assets/accounts.json');
  }

  clickButton() {
    console.log("button clicked")
  }


}
