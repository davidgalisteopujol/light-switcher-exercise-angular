import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightService {

  constructor() { }

  private switcherSubject$ = new Subject<boolean>();
  private colorChangeSubject$ = new Subject<string>();

  setSwitcherValue(value:boolean): void {
    this.switcherSubject$.next(value);
  }

  getSwitcherValue():Observable<boolean> {
    return this.switcherSubject$.asObservable();
  }

  setColorValue(color: string): void {
    this.colorChangeSubject$.next(color);
  };

  getColorValue(): Observable<string> {
    return this.colorChangeSubject$.asObservable();
  };
}
