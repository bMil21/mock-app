import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public players: Player[];

  constructor() { }

  ngOnInit(): void {
    this.getPlayers();
  }

  /**
   * Get Players
   */
  getPlayers() {
    this.players = [
      {
        'id': 1,
        'name': 'John Doe',
        'position': 'WR',
        'team': 'MIA'
      },
      {
        'id': 2,
        'name': 'Billy Bob',
        'position': 'RB',
        'team': 'DAL'
      }
    ];
  }

}
