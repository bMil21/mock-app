import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PlayerMap, PlayersResponse, Player } from 'src/app/models/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get Players
   */
  getPlayers(): Observable<Player[]> {
    const url = '/assets/data/players.json';
    return this.http.get(url).pipe(
      map<PlayersResponse, Player[]>(
        (response) => response.players.map(player => Player.decode(player))
      )
    );
  }
}
