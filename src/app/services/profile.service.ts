import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userProfile } from '../features/front/home/home.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  // public getUserProfile(): Observable<userProfile[]> {
  //   //console.log(`Fetching profile for user ID`);

    
  //   return null as any;
  //   // return this.http.get<userProfile[]>('/api/profile');
   
  // }



}
