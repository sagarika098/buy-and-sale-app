import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../../types';
// import { fakeListings } from '../../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing: Listing | undefined;
  constructor(private route: ActivatedRoute,private listingService:ListingsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?? '0';
    //this.listing = fakeListings.find(fakeListings=>fakeListings.id === id)

    this.listingService.getListingById(id).subscribe((listing) => {
      this.listing = listing;
      this.isLoading = false;
    });
    this.listingService.addViewToListing(id).subscribe(()=> console.log("views updated"));
  }

}
