import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent {
  public contestants : string[];
  public roundNumber : number;
  public winners : string[];
  public message : string;
  public isShown: boolean;

  constructor(private rosterService: RosterService) {
    this.contestants = this.rosterService.getContestants();
    this.roundNumber = 1;
    this.winners = [];
    this.isShown = true;
  }

  completeRound(matchForm) {
    console.log("Number of winners is " + this.winners.length + "which is " + this.winners);
    this.isShown = true;
    if(this.winners.length == 1) {
      this.message = "Winner: " + this.winners[0];
      this.winners = [];
      this.rosterService.resetContestants();
      this.contestants = this.rosterService.getContestants();
      this.roundNumber = 1;
      this.isShown = false;
    } else if (this.winners.length == 2) {
      this.rosterService.resetContestants();
      this.rosterService.addContestant(this.winners[0]);
      this.rosterService.addContestant(this.winners[1]);
      this.winners = [];
      this.contestants = this.rosterService.getContestants();
      this.roundNumber++;
    } else {
      this.rosterService.resetContestants();
      this.rosterService.addContestant(this.winners[0]);
      this.rosterService.addContestant(this.winners[1]);
      this.rosterService.addContestant(this.winners[2]);
      this.rosterService.addContestant(this.winners[3]);
      this.winners = [];
      this.contestants = this.rosterService.getContestants();
      this.roundNumber++;
    }
  }
}
