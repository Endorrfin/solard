import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../../services/services.service";

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
  }

}
