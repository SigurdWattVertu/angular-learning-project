import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
console.log('hello')

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

  credentials: IUserCredentials = { 
    email: '',
    password: ''
  }

  constructor( private userService: UserService, private router: Router) { }

  signIn() {
    console.log('sign in')
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/catalog'])
    })
  }

}
