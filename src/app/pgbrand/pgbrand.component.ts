import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/js/materialize.min.js';

// MODELS
import { Box } from '../models/box'; // Box Model
import { Brand } from '../models/brand'; // Brand Model

// SERVICES
import { BoxService } from '../services/box/box.service'; // Box Service
import { BrandService } from '../services/brand/brand.service'; // Brand Service

@Component({
  selector: 'app-pgbrand',
  templateUrl: './pgbrand.component.html',
  styleUrls: ['./pgbrand.component.scss']
})

export class PgbrandComponent implements OnInit {


  public title:string = "Choose The Brand";
  public excerpt:string = "Something Else."

  public boxes: Box[];
  public brands: Brand[];

  constructor(
    private boxService: BoxService,
    private brandService: BrandService
  ) { }

  ngOnInit() {
    this.getBoxes();
    this.getBrands();
  }

  getBoxes(): void {
    this.boxService.getBoxes()
    .subscribe(boxes => this.boxes = boxes);
  }

  getBrands(): void {
    this.brandService.getBrands()
    .subscribe(brands => this.brands = brands);
  }

}
