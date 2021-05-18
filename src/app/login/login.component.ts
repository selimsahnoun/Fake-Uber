import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  responseToTheUser: string = '';
  errorMessage: string = '';
  user = {
    email: '',
    password: '',
  };
  constructor(private UserService: UserService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    const data = {
      email: this.user.email,
      password: this.user.password,
    };
    this.UserService.createLogin(data).subscribe(
      (res) => {
        if (res.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: `This user does not exist`,
          });
        } else if (res.status === 500) {
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: `Wrong password`,
          });
        } else {
          console.log(res);
          window.localStorage.setItem('token', res.token);
          window.localStorage.setItem('id', res.id);
          window.localStorage.setItem('email', res.email);
          this.router.navigateByUrl('/');
          //logged in = true
          // update the loggediN in the navbar
        }
      },
      (error) => {
        console.log(window.localStorage);
        console.log(error);
      }
    );
  }
}
