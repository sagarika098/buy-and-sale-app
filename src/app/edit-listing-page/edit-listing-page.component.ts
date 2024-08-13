import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  listing: Listing | undefined;

  constructor(private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    //this.listing = fakeListings.find(fakeListings=>fakeListings.id === id)
  }
  onSubmit():void {
    alert('Saving changes to listing.....');
    this.router.navigateByUrl('/my-listing');
    
    }
}
