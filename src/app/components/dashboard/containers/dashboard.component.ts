import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { User } from '../../public/public';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public shrink: boolean = false;
  public currentUser!: User;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
  }

  menuShrink() {
    this.shrink = !this.shrink;
  }

  logout() {
    this.currentUser = {
      username: '',
      password: '',
      profilePic: '',
      fullName: '',
      email: ''
    };
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
