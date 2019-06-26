import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public accountsService: AccountsService) { }

  sortA() {
    this.accountsService.sortAccounts();
  }

  sortC() {
    this.accountsService.sortCash();
  }

  ngOnInit() {
  }

}
