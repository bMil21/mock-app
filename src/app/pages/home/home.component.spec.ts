import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PlayerService } from 'src/app/core/services/player.service';
import { MatCardModule } from '@angular/material/card';
import { mockPlayers } from 'src/app/models/player';
import { of } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop/drag-events';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const playerServiceSpy: jasmine.SpyObj<PlayerService> = jasmine.createSpyObj('PlayerService', ['getPlayers']);

  // // Clamps a number between zero and a maximum.
  // function clamp(value: number, max: number): number {
  //   return Math.max(0, Math.min(max, value));
  // }

  // function moveItemInArray<T = any>(array: T[], fromIndex: number, toIndex: number): void {
  //   const from = clamp(fromIndex, array.length - 1);
  //   const to = clamp(toIndex, array.length - 1);
  //   if (from === to) return;
  //   const target = array[from];
  //   const delta = to < from ? -1 : 1;
  //   for (let i = from; i !== to; i += delta) {
  //     array[i] = array[i + delta];
  //   }
  //   array[to] = target;
  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      providers: [
        {provide: PlayerService, useValue: playerServiceSpy}
      ],
      declarations: [
        HomeComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    component.players = JSON.parse(JSON.stringify(mockPlayers));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get players', () => {
    playerServiceSpy.getPlayers.and.returnValue(of(mockPlayers));
    component.getPlayers();
    expect(component.players).toEqual(mockPlayers);
  });

  it('should change position of players', () => {
    class MockDragDrop {
      previousIndex: number;
      currentIndex: number;

      constructor(num1, num2) {
        this.previousIndex = num1;
        this.currentIndex = num2;
      }
    }
    const mockDragDrop = new MockDragDrop(1,0) as CdkDragDrop<['0','1']>;
    expect(component.players[0].name).toBe('John Doe');
    component.drop(mockDragDrop);
    expect(component.players[0].name).toBe('Billy Bob');
  });
});
