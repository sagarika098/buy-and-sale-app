import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  listing: Listing | any;

  constructor(private activeRouter: ActivatedRoute, private router: Router,private listingService:ListingsService) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id')??'0';
    this.listingService.getListingById(id).subscribe((listing) => {
      this.listing = listing;
    });
    console.log(id)
    //this.listing = fakeListings.find(fakeListings=>fakeListings.id === id)
  }
  onSubmit({name, description, price}:Listing):void {
    const id = this.activeRouter.snapshot.paramMap.get('id')??'0';
    this.listingService.editListing(id,name,description,price).subscribe(()=>{
      this.router.navigateByUrl('/my-listing');
    })
    console.log(id)
    // alert('Saving changes to listing.....');
    // this.router.navigateByUrl('/my-listing');
    
    }
}
