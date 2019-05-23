import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { USERS } from '../mock-users';
import { UserService } from '../user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;

  onSelect(user: User): void{
    this.selectedUser = user;
  }

  constructor(private userService: UserService) { }

  getUsers(): void {
    timer(0, 2000).subscribe( () => {
    this.userService.getUsers().subscribe(users => this.users = users);
    });
  }

  
  ngOnInit() {
    this.getUsers();
  }

}
