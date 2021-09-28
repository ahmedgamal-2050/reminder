import { User } from "./components/public/public";

export class AuthService {
  public loggedIn: boolean = false;
  public currentUser: User = JSON.parse(localStorage.getItem('currentUser') as string);
  public userList: User[] = JSON.parse(localStorage.getItem('userList') as string);

  isAuthenticated() {
    const promise = new Promise(
      (reslove, reject) => {
        reslove(this.loggedIn);
      }
    );
    return promise;
  }

  login() {
    localStorage.removeItem('loggedIn');
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
    localStorage.setItem('loggedIn', 'false');
    alert('You are logged out');
  }
}
