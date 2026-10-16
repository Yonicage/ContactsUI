import { Component, signal } from '@angular/core';
import { LoginBox } from './login-box/login-box';
import { ContactScreen } from './contact-screen/contact-screen';

@Component({
  selector: 'app-root',
  imports: [LoginBox, ContactScreen],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userNameAPP!:string;
  loggedIn = false;
  protected readonly title = signal('ContactsUI');

  onEnter(login: Login){
    this.userNameAPP = login.userName
    this.loggedIn = login.isLoggedIn
  }
}
