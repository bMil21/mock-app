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
