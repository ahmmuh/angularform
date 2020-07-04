import { Component, OnInit } from '@angular/core'
import { Book } from '../book'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  model = new Book(
    1,
    'The True Love',
    'by Ahmed',
    'This is a true love which accured me a few days ago',
  )
  names: []
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}

  get currentBook() {
    return JSON.stringify(this.model)
  }
}
