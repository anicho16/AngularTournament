import { Injectable } from '@angular/core';
import { RegistrationComponent } from '../tournament/registration/registration.component';
import { BracketsComponent } from '../tournament/brackets/brackets.component';


@Injectable( {
  providedIn: 'root',
})
export class RosterService {

  private contestants : string[];
  private errorMessage : string;

  constructor() {
    this.contestants = [
    ];
    this.errorMessage = "";
  }

  getContestants() {
    return this.contestants;
  }

  getErrorMessage() {
    return this.errorMessage;
  }

  addContestant(player: string) {
    if(player == null || player === "") {
      this.errorMessage = "Player name cannot be empty.";
    }
    else if(this.contestants.includes(player)) {
      this.errorMessage = "Cannot enter duplicate name.";
    } else {
      this.contestants.push(player);
    }
  }

  resetContestants() {
    this.contestants = [];
  }
}
