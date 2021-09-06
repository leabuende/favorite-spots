import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

const Cards: CardData[] = [
  {
    title: 'Le comptoir du Panthéon',
    location: 'Place du Panthéon, Paris',
    description: 'Lovely view on the Panthéon and the Eiffel Tower, the best place to read or to get on a first date',

    // TODO add instagram, etc
    contributor: {
      name: 'Lea',
      github: 'https://github.com/leabuende/',
    },
  },
  {
    title: 'Parc du Luxembourg',
    location: 'Paris',
    description: 'The best place in the world to have a picnic',
    contributor: {
      name: 'Lea',
      github: 'https://github.com/leabuende/',
    },
  },
  {
    title: 'Passagio',
    location: 'Milan',
    description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there.',
    contributor: {
      name: 'Lea',
      github: 'https://github.com/leabuende/',
    },
  },
  {
    title: 'Neo',
    location: 'Bournemouth, UK',
    description: 'With spectacular views of the seafront, great food & cocktails, what else more could you want... except another cocktail and to be in Paris?!',
    contributor: {
      name: 'Nathan',
      github: 'https://github.com/nathan3882'
    },
  },
];

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  title = 'hello';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) {
    this.titleService.setTitle('My Favorite Spots - Restaurants');
  }

  ngOnInit(): void {
  }

  navToContributors() {
    this.router.navigateByUrl('contributors');
  }

  getCards() {
    return Cards;
  }

  handlePictureClick(card: CardData) {
    window.open(card.contributor.github, '_blank');
  }
}

interface Contributor {
  name: 'Lea' | 'Nathan';
  github: string; // add other social medias here!
}

interface CardData {
  title: string;
  location: string;
  description: string;
  contributor: Contributor;
}
