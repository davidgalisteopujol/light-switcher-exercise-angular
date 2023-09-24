import { Component } from '@angular/core';
import { TrafficLightService } from 'src/app/services/traffic-light.service';


@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  public colors = ["rojo", "amarillo", "verde"];
  public checked = false;
  public selectedColor: string = this.colors[0];

  constructor(private trafficLightService: TrafficLightService) { }

  onSwitchChange(): void {
    this.checked = !this.checked;
    this.trafficLightService.setSwitcherValue(this.checked);
  };

  valueChange(): void {
    this.trafficLightService.setColorValue(this.selectedColor);
  };

}