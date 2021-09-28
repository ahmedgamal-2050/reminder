import { Injectable, EventEmitter } from '@angular/core';
import { User } from './public';

@Injectable({
  providedIn: "root"
})

export class UserService {
  public userUpdated = new EventEmitter<User[]>();

  constructor() { }
}
