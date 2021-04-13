import { Component, OnInit } from '@angular/core';
import { User } from '../common/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  submited: boolean = false;
  newUser: User;

  onSubmit(){
    console.log(this.newUser)
    this.submited = !this.submited
  }

  constructor() { }

  ngOnInit(): void {
    this.newUser = new User(null, null, null, null)
  }

}
