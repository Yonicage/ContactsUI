import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-box',
  imports: [FormsModule],
  templateUrl: './login-box.html',
  styleUrl: './login-box.css',
})
export class LoginBox {


  userName ='';
  @Output() Enter = new EventEmitter<Login>();


  onEnter(){
      const login: Login = {
        userName: this.userName,
        isLoggedIn:true
      };
      
    this.Enter.emit(login);
  }

}
