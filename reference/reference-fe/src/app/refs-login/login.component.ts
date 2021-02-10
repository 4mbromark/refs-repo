import { StyleService } from './../refs-utility/refs-service/style.service';
import { UserService } from './../refs-utility/refs-service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  smartphone = false;

  username = new FormControl();
  password = new FormControl();

  constructor(
    private userService: UserService,
    private styleService: StyleService
  ) { }

  ngOnInit(): void {
    this.styleService.isSmartphone().subscribe((smartphone: boolean) => {
      this.smartphone = smartphone;
    });
  }

  login(): void {
    this.userService.login(this.username.value, this.password.value);
  }

}
