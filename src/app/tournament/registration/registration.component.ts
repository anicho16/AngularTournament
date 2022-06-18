import { Component, OnInit } from '@angular/core';

import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RosterService]
})
export class RegistrationComponent implements OnInit {

  public players: string[];
  public message: string;

  constructor(private rosterService: RosterService) {
    this.players = ['', '', '', '', '', '', '', ''];
    this.message = "";
  }

  ngOnInit(): void {
    registerContestants(playersForm){
      if (playersForm.invalid) {
        this.message = 'Please correct all errors and resubmit the form';
      } else {
        let player: string = playersForm.value.player;
        this.rosterService.addContestant(player)
      }
    }
  }

}
