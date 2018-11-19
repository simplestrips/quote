import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pgexpire',
  templateUrl: './pgexpire.component.html',
  styleUrls: ['./pgexpire.component.scss']
})
export class PgexpireComponent implements OnInit {

  public title:string = "Expiration Date?";
  public excerpt:string = "What is the expiration date?"

  constructor(private location: Location) { }

  ngOnInit() {
  }



  goBack(): void {
    this.location.back();
  }


}
