export class Player {
    id: number;
    name: string;
    position: string;
    team: string;

    constructor(
        id: number,
        name: string,
        position: string,
        team: string
    ) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.team = team;
    }

    /**
     * Decode JSON to Player
     * @param json 
     */
    static decode(json: PlayerMap): Player {
        const player = Object.create(Player.prototype);
        return Object.assign(player, {
            id: json['id'],
            name: json['name'],
            position: json['position'],
            team: json['team']
        });
    }
}

export interface PlayerMap {
    id: number;
    name: string;
    position: string;
    team: string;
}

export interface PlayersResponse {
    players: PlayerMap[];
}

export const mockPlayers: PlayerMap[] = [
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
];
export const mockPlayersResponse: PlayersResponse = {
    players: mockPlayers
};
