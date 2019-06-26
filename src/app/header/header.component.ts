import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public accountsService: AccountsService) { }

  signA = '';
  signC = '';

  aClicked = 0;
  cClicked = 0;

  sortA() {
    this.signC = '';
    this.aClicked++;
    // console.log(this.aClicked);
    this.aClicked % 2 !== 0 ? this.signA = "^" : this.signA = "v"
    this.accountsService.sortAccounts();
  }

  sortC() {
    this.signA = '';
    this.cClicked++;
    // console.log(this.cClicked);
    this.cClicked % 2 !== 0 ? this.signC = "^" : this.signC = "v"
    this.accountsService.sortCash();
  }

  ngOnInit() {
  }

}
