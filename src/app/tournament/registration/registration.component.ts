import { Component, OnInit } from '@angular/core';

import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
  }

}
