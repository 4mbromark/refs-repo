import { AlixService } from './../../refs-utility/refs-service/alix.service';
import { UserService } from './../../refs-utility/refs-service/user.service';
import { Alix } from './../../refs-utility/refs-object/Alix';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-alix',
  templateUrl: './admin-alix.component.html',
  styleUrls: ['./admin-alix.component.css']
})
export class AdminAlixComponent implements OnInit {

  alixList: Alix[] = null;

  constructor(
    private alixService: AlixService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const user = this.userService.getUserValue();
    this.alixService.getAlixList(user.id).then((alixList: Alix[]) => {
      this.alixList = alixList;
    });
  }

}
