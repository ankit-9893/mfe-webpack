import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private userName: string;

  obs$ = new Subject();

  public get user(): string {
    return this.userName;
  }

  constructor() { }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }

}
