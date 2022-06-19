import { Injectable } from '@angular/core';
import { RegistrationComponent } from '../tournament/registration/registration.component';
import { BracketsComponent } from '../tournament/brackets/brackets.component';

@Injectable( {
  providedIn: 'root',
})
export class RosterService {

  private contestants : string[];

  constructor() {
    this.contestants = [
    ];
   }

  getContestants() {
    return this.contestants;
  }

  addContestant(player: string) {
  /*  if(player == null || player == "") {
      throw new Error("Player must contain a name.");
    }

    for (let contestant of this.contestants) {
      if(player.localeCompare(contestant)) {
        throw new Error("Player already exists.");
      }
    } */

    this.contestants.push(player);
    console.log(player + " has been added in roster service")
  }
}
