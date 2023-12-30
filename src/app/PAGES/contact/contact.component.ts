import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contactForm = new FormGroup({
    lastName: new FormControl(null, [
      Validators.required,
    ]),
    firstname: new FormControl(null, [
      Validators.required,
    ]),
    email: new FormControl(null, [
      Validators.required,
    ]),
    message: new FormControl(null, [
      Validators.required,
    ]),

  })

  onSubmit() {

  }
  ngOnInit(): void {
  }

}
