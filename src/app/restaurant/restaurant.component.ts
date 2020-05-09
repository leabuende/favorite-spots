import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  title: string = "hello"
  cards: any = [
    {
      title: 'Le comptoir du Panthéon',
      location: 'Place du Panthéon, Paris',
      description: 'Lovely view on the Panthéon and the Eiffel Tower, the best place to read or to get on a first date'
    },
    {
      title: 'Parc du Luxembourg',
      location:'Paris',
      description:'The best place in the world to have a picnic'
    },
    {
      title: 'Parc du Luxembourg',
      location:'Paris',
      description:'The best place in the world to have a picnic'
    },
    {
      title: 'Parc du Luxembourg',
      location:'Paris',
      description:'The best place in the world to have a picnic'
    }
  ]
  constructor(
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
  }

}
