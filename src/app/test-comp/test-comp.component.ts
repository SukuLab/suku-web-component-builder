import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {
  buttonData = {
    title: 'Marketplace',
    icon: 'fa fa-shopping-cart',
    path: '/marketplaceDashboard',
    disabled: true,
    id: 'Marketplace'
  };
  constructor() { }

  ngOnInit() {
  }

}
