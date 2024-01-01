import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Messagerie } from 'src/app/Models/messagerie';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message = new Messagerie();
  constructor(private userService: UsersService) { }

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
    if (this.contactForm.valid) {

      if (this.message != null && this.message != undefined) {

        let message = new Messagerie();
        this.message.id = 0;
        this.message.firstName = this.contactForm.get('firstName')?.value ?? "";
        this.message.lastName = this.contactForm.get('lastName')?.value ?? "";
        this.message.email = this.contactForm.get('email')?.value ?? "";
        this.message.message = this.contactForm.get('message')?.value ?? "";
        this.message.version = 0;

        this.userService.saveMsg(this.message).subscribe(result => {
          console.log(message);

        })
      }
    }
  }
  ngOnInit(): void {
  }

}
