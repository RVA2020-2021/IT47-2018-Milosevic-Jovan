import { Team } from './team';
import { Nationality } from "./nationality";

export class Player {
    id: number;
    dateOfBirth: Date;
    firstName: string;
    lastName: string;
    registrationNumber: string;
    nationality: Nationality;
    team: Team;
}