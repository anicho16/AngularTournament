import { Component, OnInit } from '@angular/core';

import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RosterService]
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
    if (playersForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      console.log(this.players);
      for(let player of this.players) {
        this.rosterService.addContestant(player);
        //this.message.concat(player);
        this.isShown = true;
      }

      //for debugging: delete before submit
      let contestantR = this.rosterService.getContestants();
      for(let contest of contestantR) {
        console.log("This is the one: " + contest);
      }
    }
  }

  trackByFn(index: any, item: any) {
    //console.log("index:{i}, item:{s}, index, item");
    return index;
  }


}
