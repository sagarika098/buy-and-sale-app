import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../types';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private httpClient: HttpClient) { }

  getListings(): Observable<Listing[]>{
    return this.httpClient.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing>{
      return this.httpClient.get<Listing>(`http://localhost:8000/api/listings/${id}`);
  }
  addViewToListing(id: string): Observable<Listing>{
    return this.httpClient.post<Listing>(`http://localhost:8000/api/listings/${id}/add-view`,{},httpOptions);
  }
}
