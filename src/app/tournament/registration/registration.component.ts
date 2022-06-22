import { Component, OnInit } from '@angular/core';

import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public players: string[];
  public message: string;
  public isShown: boolean;

  constructor(private rosterService: RosterService) {
    this.players = ['', '', '', '', '', '', '', ''];
    this.message = "";
    this.isShown = false;
  }

  registerContestants(playersForm){
    this.message = '';
    for(let player of this.players) {
      this.rosterService.addContestant(player);
      this.isShown = true;
    }

    if(this.rosterService.getContestants().length !=2 &&
    this.rosterService.getContestants().length !=4 &&
    this.rosterService.getContestants().length !=8){
      this.rosterService.resetContestants();
      this.message = "You must enter contestants in groups of 2, 4, or 8. " +
      "No duplicate names are allowed. " +
      "Contestants have been reset. Please enter your contestants again.";
      this.isShown = false;
    }
  }

  trackByFn(index: any, item: any) {
    //console.log("index:{i}, item:{s}, index, item");
    return index;
  }

  autofillTwo() {
    this.players = ["Mario", "Luigi"];
  }

  autofillFour() {
    this.players = ["Mario", "Luigi", "Peach", "Daisy"];
  }

  autofillEight() {
    this.players = ["Mario", "Luigi", "Peach", "Daisy", "DK", "Toad", "Yoshi", "Toadette"];
  }

}
