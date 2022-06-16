import { Injectable } from '@angular/core';
import { RegistrationComponent } from '../tournament/registration';

@Injectable()
export class RosterService {

  private contestants: Contestants[];
  constructor() {
    this.contestants = [
    ];
   }

  getContestants() : Contestants[] {
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

      if (angular.equals(player, contestant)) {
        throw new Error("Angular: Player already exits.");
      }
    }

    this.contestants.push(player);
  }
}
