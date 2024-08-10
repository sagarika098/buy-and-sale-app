import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  constructor(private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    alert('creating a new listing page');
    this.router.navigateByUrl('/my-listing');
  }

}
