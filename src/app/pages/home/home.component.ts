import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public players: Player[];

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  /**
   * Get Players
   */
  getPlayers() {
    this.playerService.getPlayers()
      .subscribe(players => {
        this.players = players;
      });
  }

  /**
   * 
   * @param event 
   */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
  }
}
