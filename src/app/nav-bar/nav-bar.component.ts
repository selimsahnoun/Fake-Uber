import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(public userService: UserService) {}

  ngOnInit() {
    if (typeof localStorage.getItem('token') === 'string') {
      this.loggedIn = true;
    }
  }
  clearStorage() {
    //logdin = false
    localStorage.clear();
    location.reload();
  }
}
