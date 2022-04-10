import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserDetailsService} from "../../../../../service/user-details.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl(null,
      [Validators.required, Validators.email]),
    password: new FormControl(null,
      [Validators.required, Validators.minLength(6),
        Validators.maxLength(16)]),
  });


  constructor(private _snackBar: MatSnackBar, private userDetailsService: UserDetailsService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userDetailsService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
