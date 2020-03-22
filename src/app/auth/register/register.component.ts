import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  authError: any;
  constructor (private auth: AuthService, private router: Router){ }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }
  userpage() {
    this.router.navigate(['/userpage']);
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

}
