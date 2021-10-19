import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { User } from '../public';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public userList: User[] = [];
  public loginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.userList) {
      this.userList = this.authService.userList;
    }
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("(^[a-zA-Z].*)([^' ']+$)"),
          Validators.maxLength(50)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ]
      ],
    });
    this.loginForm.reset();
  }

  login() {
    this.loginError = false;
    if (this.loginForm.dirty && this.loginForm.valid) {
      if (this.userList.length) {
        for (let i = 0; i < this.userList.length; i++) {
          if ((this.userList[i].username === this.loginForm.value.username) &&
            (this.userList[i].password === this.loginForm.value.password)) {
            alert('You are logged in');
            localStorage.setItem('currentUser', JSON.stringify(this.userList[i]));
            this.authService.login();
            this.router.navigate(['/dashboard/prayer']);
            return;
          } else {
            this.loginError = true;
            alert(`username or password are not correct, Please try again`);
            return;
          }
        }
      } else {
        alert(`this username doesn't exist, Please create an account`);
        return;
      }
    } else {
      this.loginForm.markAsTouched;
      this.loginForm.invalid;
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  showPassword() {
    $('#password').attr('type', 'text');
  }
}
