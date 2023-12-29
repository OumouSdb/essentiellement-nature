import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UsersService } from '../Services/users.service';
import { Observable, first } from 'rxjs';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  user!: User;

  users?: User[];

  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    this.getAllUsers();

  }

  getAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    })
  }
}


