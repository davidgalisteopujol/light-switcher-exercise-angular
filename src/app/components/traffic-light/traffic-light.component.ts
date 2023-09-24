import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrafficLightService } from '../../services/traffic-light.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit, OnDestroy {

  public colorsClass = "rojo";
  public switcher = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private trafficLightService: TrafficLightService) { }


  ngOnInit(): void {
    this.trafficLightService.getSwitcherValue()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => this.switcher = data);

    this.trafficLightService.getColorValue()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(response => this.colorsClass = response);
  };


  getClass(value: string): string {
    if (this.switcher) {
      if (this.colorsClass == value) {
        return this.colorsClass;
      }
    }
    return 'off';
  };

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };

}
