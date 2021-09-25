import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private smartphone: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  isSmartphone(): Observable<boolean> {
    return this.smartphone.asObservable();
  }

  checkSmartphone(size: number) {
    if (this.smartphone.value && size > 500) {
      this.smartphone.next(false);
    } else if (!this.smartphone.value && size < 500) {
      this.smartphone.next(true);
    }
  }
}
