import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';
@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: any;
  @Input() currentName: any;
  @Input() currentDescription: any;;
  @Input() currentPrice: any;
  name: string = '';
  description: string = '';
  price: string = '';
  listing: Listing | undefined;

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // const id = this.activeRouter.snapshot.paramMap.get('id');
    // this.listing = fakeListings.find(fakeListings=>fakeListings.id === id)
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void{
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0
    });
    // alert('creating a new listing page');
    // this.router.navigateByUrl('/my-listing');
  }

}
