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
}
