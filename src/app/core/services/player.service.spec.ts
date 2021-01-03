import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Player, PlayersResponse } from 'src/app/models/player';
import { of } from 'rxjs';

describe('PlayerService', () => {
  let playerService: PlayerService;
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    playerService = new PlayerService(httpClientSpy as any);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PlayerService,
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });

    playerService = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(playerService).toBeTruthy();
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

    httpClientSpy.get.and.returnValue(of(mockPlayers));

    playerService.getPlayers()
      .subscribe(players => {
        expect(players[0].name).toEqual("John Doe");
        expect(players[0]).toBeInstanceOf(Player);
      });
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
