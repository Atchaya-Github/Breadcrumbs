import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`).subscribe(users => this.users = users);
  }
}
