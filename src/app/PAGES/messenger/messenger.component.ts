import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Messagerie } from 'src/app/Models/messagerie';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  messages?: Messagerie[];
  constructor(private userService: UsersService) { }

  getMessages() {
    this.userService.getMessages().pipe(first()).subscribe(result => {
      this.messages = result;
    })
  }


  ngOnInit(): void {
    this.getMessages();
  }

}
