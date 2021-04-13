import { Component, OnInit } from '@angular/core';
import { User } from '../common/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser: User;

  onSubmit(){
    console.log(this.newUser)
  }

  constructor() { }

  ngOnInit(): void {
    this.newUser = new User(null, null, null, null)
  }

}
