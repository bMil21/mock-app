import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Player, PlayersResponse } from 'src/app/models/player';

describe('PlayerService', () => {
  let service: PlayerService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        PlayerService
      ]
    });
    service = TestBed.inject(PlayerService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get players', () => {
    const mockPlayers: PlayersResponse = {
      players: [
          {
              id: 1,
              name: 'John Doe',
              position: 'WR',
              team: 'MIA'
          },
          {
              id: 2,
              name: 'Billy Bob',
              position: 'RB',
              team: 'DAL'
          }
      ]
    };

    service.getPlayers()
      .subscribe(players => {
        expect(players[0].name).toEqual("John Doe");
      });

    const req = httpTestingController.expectOne('/assets/data/players.json');
    expect(req.request.method).toEqual('GET');
    req.flush(mockPlayers);
  });
});
