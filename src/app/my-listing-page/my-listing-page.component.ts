import { Component, OnInit } from '@angular/core';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';
@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent implements OnInit {

  listings: Listing[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.listings  = fakeListings;
  }
  onDeleteClicked(listingId: string): void{
    alert(`Deleting your listing with id ${listingId}`)

  }

}
