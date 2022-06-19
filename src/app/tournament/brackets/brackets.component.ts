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

  constructor(private rosterService: RosterService) {
    this.contestants = this.rosterService.getContestants();
    this.roundNumber = 1;
    this.winners = [];
  }

  completeRound(matchForm) {
    console.log(this.winners);

    if(this.winners.length == 1) {

    } else if (this.winners.length == 2) {
      this.rosterService.resetContestants();
      this.rosterService.addContestant(this.winners[0]);
      this.rosterService.addContestant(this.winners[1]);
      this.contestants = this.rosterService.getContestants();
    } else {
      this.rosterService.resetContestants();
      this.rosterService.addContestant(this.winners[0]);
      this.rosterService.addContestant(this.winners[1]);
      this.rosterService.addContestant(this.winners[2]);
      this.rosterService.addContestant(this.winners[3]);
      this.contestants = this.rosterService.getContestants();
    }
        this.roundNumber++;
  }

}
