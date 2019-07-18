import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {
  form: FormGroup;
  buttonData = {
    title: 'Marketplace',
    icon: 'fa fa-shopping-cart',
    path: '/marketplaceDashboard',
    disabled: true,
    id: 'Marketplace'
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'search': ''
    });
  }

  search() {
    console.log('form', this.form.value.search);
  }

}
