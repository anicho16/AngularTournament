import { TestBed, inject } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let rosterService: RosterService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RosterService]
  }));

  beforeEach(inject([RosterService], (service: RosterService) => {
    this.rosterService = service;
  }));

  it('should be created', () => {
    expect(this.rosterService).toBeTruthy();
  });

  it('should not allow duplicate names', () => {
    this.rosterService.addContestant("Steve");
    this.rosterService.addContestant("Steve");
    expect(this.rosterService.getContestants().length).toEqual(1);
    expect(this.rosterService.getErrorMessage()).toEqual("Cannot enter duplicate name.");
  });

  it('should not allow null names', ()  => {
    this.rosterService.addContestant(null);
    expect(this.rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow empty string names', ()  => {
    this.rosterService.addContestant("");
    expect(this.rosterService.getContestants().length).toEqual(0);
  });

  it('should add one contestant', ()  => {
    this.rosterService.addContestant("Steve");
    expect(this.rosterService.getContestants().length).toEqual("Steve");
  });

  it('should add several contestants', ()  => {
    this.rosterService.addContestant("Steve");
    this.rosterService.addContestant("James");
    let results = this.rosterService.getContestants();
    expect(results[1]).toEqual("James");
  });
});
