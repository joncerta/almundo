import { Component, OnInit } from '@angular/core';
import { HotelService } from './../../services/hotel.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers: [HotelService, NgbRatingConfig]  
})
export class HotelsComponent implements OnInit {
  public hotels;
  public dropTable = false;
  public dropStarsTable = false;

  constructor(
    private hotelService: HotelService,
    config: NgbRatingConfig
  ){
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hotelService.getHotels().subscribe(
      result => {
        this.hotels = result;
      },
      error => {
        console.log(error);
      }
    );;
  }

  dropSearch() {
    this.dropTable = !this.dropTable;
  }

  dropStars() {
    this.dropStarsTable = !this.dropStarsTable;
  }

}
