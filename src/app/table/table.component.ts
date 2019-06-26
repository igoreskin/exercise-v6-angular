import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  accounts;
  accountsClicked = 0;
  cashClicked = 0;

  constructor(public accountsService: AccountsService) {
    this.accountsService.accountMethodCalled$.subscribe(
      () => this.sortAcc()
    ), 
    this.accountsService.cashMethodCalled$.subscribe(
      () => this.sortCsh()
    )
    
   }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(res => {
      this.accounts = res['accounts'];
      console.log(this.accounts);
    })
  }

  sortAcc() {
    this.accountsClicked++;
    // console.log(this.accountsClicked);
    if (this.accountsClicked % 2 !== 0) {
      return this.accounts.sort((a, b) => a.name.replace(/[^0-9]/g, '') - b.name.replace(/[^0-9]/g, ''));
    } else {
      return this.accounts.sort((a, b) => b.name.replace(/[^0-9]/g, '') - a.name.replace(/[^0-9]/g, ''))
    }
  }

  sortCsh() {
    this.cashClicked++;
    // console.log(this.cashClicked);
    if (this.cashClicked % 2 !== 0) {
    return this.accounts.sort((a, b) => a.cash.replace(/[^0-9]/g, '') - b.cash.replace(/[^0-9]/g, ''))
    } else {
      return this.accounts.sort((a, b) => b.cash.replace(/[^0-9]/g, '') - a.cash.replace(/[^0-9]/g, ''))
    }
  }
  
}
