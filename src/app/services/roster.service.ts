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
    if(player == null || player === "") {
    } else {
      this.contestants.push(player);
      //delete before submit. Debug
      console.log(player + " has been added in roster service");
      console.log("length of cont array in service is " + this.contestants.length);
    }
  }

  resetContestants() {
    this.contestants = [];
  }
}
