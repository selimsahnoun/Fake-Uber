import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-component',
  templateUrl: './reset-component.component.html',
  styleUrls: ['./reset-component.component.css'],
})
export class ResetComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }
}
