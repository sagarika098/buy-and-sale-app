import { Component, OnInit } from '@angular/core';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';
import { ListingsService } from '../listings.service';
@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent implements OnInit {

  listings: Listing[] = [];
  
  constructor(private listingService:ListingsService) { }

  ngOnInit(): void {
    this.listingService.getListingsForUser().subscribe(list=> this.listings = list);
    // this.listings  = fakeListings;
  }
  onDeleteClicked(listingId: string): void{
    // alert(`Deleting your listing with id ${listingId}`)
    this.listingService.deleteListing(listingId).subscribe(()=> this.listings = this.listings.filter(listing=>listing.id !== listingId));

  }

}
