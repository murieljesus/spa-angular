import { Injectable } from '@angular/core';
import {Detail} from '../shared/drawdetail';
import {DETAILS} from '../shared/drawdetails';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor() { }
  getDetail(): Detail[] {
    return DETAILS;
  }
  
  getFeatured(): Detail[]  {
    return DETAILS.filter((detail) => detail.featured);
  }
  
}
