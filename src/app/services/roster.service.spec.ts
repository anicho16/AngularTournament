import { TestBed, inject } from '@angular/core/testing';

import { RosterService } from './roster.service';
import { RegistrationComponent } from '../tournament/registration/registration.component';


describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RosterService]
    });
    service = TestBed.inject(RosterService);
  });

  it('should be created', inject([RosterService], (service) => {
    expect(service).toBeTruthy();
  }));

  it('should not allow duplicate names', inject([RosterService], (service)  => {
    const appComponent = new RosterService();
    appComponent.addContestant("Steve");
    appComponent.addContestant("Steve");
    expect(appComponent.addContestant("Steve")).toThrowError(Error, "Player already exists.");
  }));

  it('should not allow null names', inject([RosterService], (service)  => {
    const appComponent = new RosterService();
    appComponent.addContestant(null);
    expect(appComponent.getContestants[0]).toEqual(undefined);
  }));

  it('should not allow empty string names', inject([RosterService], (service)  => {
    const appComponent = new RosterService();
    appComponent.addContestant("");
    expect(appComponent.getContestants[0]).toEqual(undefined);
  }));

  it('should add one contestant', inject([RosterService], (service)  => {
    const appComponent = new RosterService();
    appComponent.addContestant("Steve");
    expect(appComponent.getContestants[0]).toEqual("Steve");
  }));

  it('should add several contestants', inject([RosterService], (service)  => {
    const appComponent = new RosterService();
    appComponent.addContestant("Steve");
    appComponent.addContestant("James");
    expect(appComponent.getContestants[1]).toEqual("James");
  }));
});
