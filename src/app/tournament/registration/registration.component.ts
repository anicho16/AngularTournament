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
    this.message = "";
    if (playersForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
      this.rosterService.resetContestants();
      this.isShown = false;
      this.players = [];
    } else {
      console.log(this.players);
      for(let player of this.players) {
        this.rosterService.addContestant(player);
        //this.message.concat(player);
        this.isShown = true;
      }

      if(this.rosterService.getContestants().length !=2 &&
      this.rosterService.getContestants().length !=4 &&
      this.rosterService.getContestants().length !=8){
        console.log("Roster service length is: " + this.rosterService.getContestants().length);
        this.rosterService.resetContestants();
        this.message = "You must enter contestants in groups of 2, 4, or 8." +
        "Contestants have been reset. Please enter your contestants again.";
        this.isShown = false;
      }

      //for debugging: delete before submit
      let contestantRoster = this.rosterService.getContestants();
      for(let contest of contestantRoster) {
        console.log("Contestant in rosterService: " + contest);
      }
    }
  }

  trackByFn(index: any, item: any) {
    //console.log("index:{i}, item:{s}, index, item");
    return index;
  }


}
