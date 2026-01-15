import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';




export class userProfile {
  #id!: number;
  #fullName!: string;
  #title!: string;
  #bio!: string;
  #resumeUrl!: string;
  #linkedInUrl!: string;
  #photoUrl!: string;
  #yearExp!: number;

// Full Name
  get fullName(): string {
    return this.#fullName;
  }
  set fullName(value: string) {
    this.#fullName = value;
  }

  // Title
  get title(): string {
    return this.#title;
  }
  set title(value: string) {
    this.#title = value;
  }

  // Bio
  get bio(): string {
    return this.#bio;
  }
  set bio(value: string) {
    this.#bio = value;
  }

  // Resume URL
  get resumeUrl(): string {
    return this.#resumeUrl;
  }
  set resumeUrl(value: string) {
    this.#resumeUrl = value;
  }

  // LinkedIn URL
  get linkedInUrl(): string {
    return this.#linkedInUrl;
  }
  set linkedInUrl(value: string) {
    this.#linkedInUrl = value;
  }

  // Photo URL
  get photoUrl(): string {
    return this.#photoUrl;
  }
  set photoUrl(value: string) {
    this.#photoUrl = value;
  }

  //  Years of Experience
  get yearExp(): number {
    return this.#yearExp;
  }
  set yearExp(value: number) {
    this.#yearExp = value;
  }

  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent implements OnInit{

userProfileData: userProfile[] = [];

 constructor(private _router: Router, private userProfileService: ProfileService){}

    ngOnInit(): void {
   // this.loadUserProfile();
  }


  // private loadUserProfile(): void {
  //   this.userProfileService.getUserProfile().subscribe({
  //     next: (data) => {
  //       //console.log('Profile:', data);
  //       this.userProfileData = data;
  //     },
  //     error: (err) => {
  //       console.error('Failed to load profiles', err);
  //     }
  //   });
  // }
}
