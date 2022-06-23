import { TestBed, inject } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let rosterService: RosterService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RosterService]
  }));

  beforeEach(inject([RosterService], (service: RosterService) => {
    rosterService = service;
  }));

  it('should be created', () => {
    expect(rosterService).toBeTruthy();
  });

  it('should not allow duplicate names', () => {
    rosterService.addContestant("Steve");
    rosterService.addContestant("Steve");
    expect(rosterService.getContestants().length).toEqual(1);
    expect(rosterService.getErrorMessage()).toEqual("Cannot enter duplicate name.");
  });

  it('should not allow null names', ()  => {
    rosterService.addContestant(null);
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should not allow empty string names', ()  => {
    rosterService.addContestant("");
    expect(rosterService.getContestants().length).toEqual(0);
  });

  it('should add one contestant', ()  => {
    rosterService.addContestant("Steve");
    expect(rosterService.getContestants().length).toEqual(1);
  });

  it('should add several contestants', ()  => {
    rosterService.addContestant("Steve");
    rosterService.addContestant("James");
    let results = rosterService.getContestants();
    expect(results[1]).toEqual("James");
  });
});
