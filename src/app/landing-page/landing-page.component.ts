import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router,
  ) {
    this.titleService.setTitle('My Favorite Spots - Welcome');
  }


  ngOnInit(): void {
  }

  navToRestaurants() {
    this.router.navigateByUrl('/restaurant');
  }
}
