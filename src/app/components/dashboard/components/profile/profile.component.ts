import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth.service';
import { User } from '../../../public/public';
declare let $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser!: User;
  public userList: User[] = [];

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    this.userList = this.authService.userList;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  deactivate() {
    if (this.currentUser && this.userList.length) {
      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].username === this.currentUser.username) {
          this.userList.splice(i, 1);
          localStorage.removeItem('userList');
          localStorage.setItem('userList', JSON.stringify(this.userList));
          alert('Account deactivate successfully');
          this.logout();
        }
      }
    }
  }

  showPassword() {
    $('#password').attr('type', 'text');
  }
}
