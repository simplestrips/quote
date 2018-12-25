import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-pgexpire',
  templateUrl: './pgexpire.component.html',
  styleUrls: ['./pgexpire.component.scss']
})
export class PgexpireComponent implements OnInit {

  public title:string = "Expiration Date?";
  public excerpt:string = "What is the expiration date?"

  public options = {};

  constructor(private location: Location) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, this.options);
  }



  goBack(): void {
    this.location.back();
  }


}
