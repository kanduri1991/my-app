import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public vehicles:any = [];
   
  constructor(private _vehicleService:VehicleService) { 
    this._vehicleService.getVehicle().subscribe(
      (data:any)=>{
        this.vehicles=data;
      }
    )
  }


  ngOnInit(): void {
  }

}
