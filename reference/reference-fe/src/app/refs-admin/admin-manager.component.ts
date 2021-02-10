import { StyleService } from './../refs-utility/refs-service/style.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {

  smartphone = false;

  constructor(
    private styleService: StyleService
  ) { }

  ngOnInit(): void {
    this.styleService.isSmartphone().subscribe((smartphone: boolean) => {
      this.smartphone = smartphone;
    });
  }

}
