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

  getPlayers() {
    this.players = [
      {
        'name': 'John Doe',
        'position': 'WR',
        'team': 'MIA'
      },
      {
        'name': 'Billy Bob',
        'position': 'RB',
        'team': 'DAL'
      }
    ];
  }

}
