import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  data;
  accounts;
  accountsClicked = 0;
  cashClicked = 0;
  showLoadMore = true;

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
      this.data = res['accounts'];
      this.accounts = this.data.slice(0, 3);
      console.log(this.accounts);
    })
  }

  loadMore() {
    this.accounts = this.data;
    this.showLoadMore = false;
    console.log(this.accounts);
  }

  sortAcc() {
    this.accountsClicked++;
    if (this.accountsClicked % 2 !== 0) {
      return this.accounts.sort((a, b) => a.name.replace(/[^0-9]/g, '') - b.name.replace(/[^0-9]/g, ''));
    } else {
      return this.accounts.sort((a, b) => b.name.replace(/[^0-9]/g, '') - a.name.replace(/[^0-9]/g, ''))
    }
  }

  sortCsh() {
    this.cashClicked++;
    if (this.cashClicked % 2 !== 0) {
    return this.accounts.sort((a, b) => a.cash.replace(/[^0-9]/g, '') - b.cash.replace(/[^0-9]/g, ''))
    } else {
      return this.accounts.sort((a, b) => b.cash.replace(/[^0-9]/g, '') - a.cash.replace(/[^0-9]/g, ''))
    }
  }
  
}
