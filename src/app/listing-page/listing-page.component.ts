import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listings = fakeListings;
  }

}
