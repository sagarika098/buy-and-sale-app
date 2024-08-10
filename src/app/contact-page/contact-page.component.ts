import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';
// import { fakeListings } from 'src/fake-data';
// import { Listing } from 'src/types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email: String = '';
  message: String = '';
  listing: Listing | undefined;

  constructor(private activatedRout:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    const id = this.activatedRout.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(fakeListings=>fakeListings.id === id)
    this.message = `Hi, I am interested in your ${this.listing?.name.toLocaleLowerCase()}!`;
  }
  sendMessage(): void{
    alert('your message has been sent');
    this.route.navigateByUrl('/listing');
  }

}
