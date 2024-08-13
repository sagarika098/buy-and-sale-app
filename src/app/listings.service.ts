import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private httpClient: HttpClient) { }

  getListings(): Observable<Listing[]>{
    return this.httpClient.get<Listing[]>('/api/listings');
  }
}
