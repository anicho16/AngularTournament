import { Injectable } from '@angular/core';
import { RegistrationComponent } from '../tournament/registration/registration.component';

@Injectable()
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
    if(player == null || player == "") {
      throw new Error("Player must contain a name.");
    }

    for (let contestant of this.contestants) {
      if(player.localeCompare(contestant)) {
        throw new Error("Player already exists.");
      }
    }

    this.contestants.push(player);
  }
}
