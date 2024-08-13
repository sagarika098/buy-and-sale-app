import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private route: ActivatedRoute,private listingService:ListingsService) { }

  ngOnInit(): void {
     this.listingService.getListings().subscribe(list=> this.listings = list);
  }

}
