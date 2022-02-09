import { Component, OnInit } from '@angular/core';
declare const test: any;
@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css'],
})
export class HouseSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  testting() {
    test();
  }
}
