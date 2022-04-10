import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDetailsDTO} from "../../../../../model/UserDetailsDTO";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    fullName: new FormControl(null,
      [Validators.required, Validators.min(3),
        Validators.max(45)]),
    email: new FormControl(null,
      [Validators.required, Validators.email]),
    password: new FormControl(null,
      [Validators.required, Validators.min(6),
        Validators.max(16)]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  public signUp() {
    let dataDto: UserDetailsDTO = new UserDetailsDTO(
      this.signUpForm.get('fullName')?.value,
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('password')?.value,
      'https://cdn.vox-cdn.com/thumbor/JgCPp2BBxETY596wCp50ccosCfE=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/68870438/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png',
      new Date()
    );

  }

}
