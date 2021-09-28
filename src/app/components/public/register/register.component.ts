import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { User } from '../public';
declare let $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userForm!: FormGroup;
  public userList: User[] = [];
  public user!: User;
  public userExists: boolean = false;

  constructor(
    private fb: FormBuilder, private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.userList) {
      this.userList = this.authService.userList;
    }
    this.userForm = this.fb.group({
      username: [
        '',
        /*^[a-zA-Z].**/
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
    this.userForm.valueChanges.subscribe((value: any) => {
      if (value.username && this.userList.length) {
        for (let i = 0; i < this.userList.length; i++) {
          if (this.userList[i].username === value.username) {
            this.userExists = true;
          } else {
            this.userExists = false;
          }
        }
      }
    })
  }

  register() {
    if (this.userForm.dirty && this.userForm.valid && this.userExists === false) {
      this.user = {
        username: this.userForm.value.username,
        password: this.userForm.value.password,
        email: this.userForm.value.username.toLowerCase() + '@mail.com',
        profilePic: '',
        fullName: '',
      }
      this.userList.push(this.user);
      localStorage.setItem('userList', JSON.stringify(this.userList));
      this.userForm.reset();
      this.router.navigate(['/login']);
    } else {
      this.userForm.markAsTouched;
      this.userForm.invalid;
    }
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  showPassword() {
    $('#password').attr('type', 'text');
  }
}
