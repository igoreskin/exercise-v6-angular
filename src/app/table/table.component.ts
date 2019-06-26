import { Component, OnInit } from '@angular/core';
import {AccountsService } from '../accounts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  accounts;
  unsorted;

  constructor(public accountsService: AccountsService) {
    this.accountsService.componentMethodCalled$.subscribe(
      () => this.sort()
    )
   }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(res => {
      this.accounts = res['accounts'];
      this.unsorted = res['accounts'];
      console.log(this.unsorted);
    })
  }

  // sort() {
  //   this.accountsService.getAccounts().subscribe(res => {
  //     this.accounts = res['accounts'].sort((a, b) => a.name.replace(/[^0-9]/g, '') - b.name.replace(/[^0-9]/g, ''));
  //     console.log(this.accounts);
  //   })
  // }

  sort() {
    if (this.accounts === this.unsorted.sort((a, b) => b.name.replace(/[^0-9]/g, '') - a.name.replace(/[^0-9]/g, ''))) {
      return this.accounts.sort((a, b) => a.name.replace(/[^0-9]/g, '') - b.name.replace(/[^0-9]/g, ''));
    } else if (this.accounts === this.unsorted.sort((a, b) => a.name.replace(/[^0-9]/g, '') - b.name.replace(/[^0-9]/g, ''))) {
      return this.accounts.sort((a, b) => b.name.replace(/[^0-9]/g, '') - a.name.replace(/[^0-9]/g, ''))
    }
  }

  
}
