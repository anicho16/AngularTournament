import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css'],
  providers: [RosterService]
})
export class BracketsComponent {
  public contestants : string[];
  public roundNumber : number;
  public winners : string[];

  constructor(private rosterService: RosterService) {
    this.contestants = this.rosterService.getContestants();
    this.roundNumber = 1;
  }

  completeRound(matchForm) {
    console.log(this.contestants);
  }

}
