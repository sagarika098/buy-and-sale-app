import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  constructor(private activeRouter: ActivatedRoute, private router: Router,private listingService:ListingsService) { }

  ngOnInit(): void {
  }
  onSubmit({name, description, price}:Listing): void{
    this.listingService.createListing(name,description,price).subscribe(()=>{
      this.router.navigateByUrl('/my-listing');
    })
    // alert('creating a new listing page');
    
  }

}
