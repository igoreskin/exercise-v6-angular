import { Component, OnInit } from '@angular/core';
import {AccountsService } from '../accounts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  accounts;

  constructor(public accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(res => {
      this.accounts = res['accounts'];
      console.log(this.accounts);
    })
  }

  sort() {
    this.accountsService.getAccounts().subscribe(res => {
      this.accounts = res['accounts'].sort((a, b) => a.name.replace(/[^0-9]/g, '') - b.name.replace(/[^0-9]/g, ''));;
      console.log(this.accounts);
    })
  }

  
}
