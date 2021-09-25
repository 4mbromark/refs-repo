import { DeviceService } from './refs-service/device.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reference-ak';

  @HostListener('window:resize', ['$event'])
  onResize() {
    const size = window.innerWidth;
    this.deviceService.checkSmartphone(size);
  }
  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.onResize();
  }
}
