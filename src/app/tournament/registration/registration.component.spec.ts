import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { RosterService } from '../../services/roster.service';
import { FormsModule } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let service: RosterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ RegistrationComponent ],
      providers: [ RosterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(RosterService);
    fixture.detectChanges();
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow duplicate names', () => {
    component.players = ["bob", "bob"];
    component.registerContestants(component.players);
    expect(component.message).toBe("You must enter contestants in groups of 2, 4, or 8. " +
    "No duplicate names are allowed. " +
    "Contestants have been reset. Please enter your contestants again.");
  });

  it('should not allow null names', () => {
    component.players = [null];
    component.registerContestants(component.players);
    expect(component.message).toBe("You must enter contestants in groups of 2, 4, or 8. " +
    "No duplicate names are allowed. " +
    "Contestants have been reset. Please enter your contestants again.");
  });

  it('should not allow empty string names', () => {
    component.players = ["", ""];
    component.registerContestants(component.players);
    expect(component.message).toBe("You must enter contestants in groups of 2, 4, or 8. " +
    "No duplicate names are allowed. " +
    "Contestants have been reset. Please enter your contestants again.");
  });

  it('should allow a group of two players with unique names', () => {
    component.players = ["Alan", "Ethan"];
    component.registerContestants(component.players);
    let players = service.getContestants();
    expect(players[0]).toBe("Alan");
    expect(component.message).toBe("");
  });

  it('should allow a group of four players with unique names', () => {
    component.players = ["Alan", "Ethan", "Jake", "Ross"];
    component.registerContestants(component.players);
    let players = service.getContestants();
    expect(players[1]).toBe("Ethan");
    expect(component.message).toBe("");
  });

  it('should allow a group of eight players with unique names', () => {
    component.players = ["Alan", "Ethan", "Jake", "Ross", "Jack", "Norman", "Nick", "Nate"];
    component.registerContestants(component.players);
    let players = service.getContestants();
    expect(players[2]).toBe("Jake");
    expect(component.message).toBe("");
  });

  it('should autofill 2 names', () => {
    component.autofillTwo();
    component.registerContestants(component.players);
    let players = service.getContestants();
    expect(players[1]).toBe("Luigi");
    expect(component.message).toBe("");
  });

  it('should autofill 4 names', () => {
    component.autofillFour();
    component.registerContestants(component.players);
    let players = service.getContestants();
    expect(players[3]).toBe("Daisy");
    expect(component.message).toBe("");
  });

  it('should autofill 8 names', () => {
    component.autofillEight();
    component.registerContestants(component.players);
    let players = service.getContestants();
    expect(players[7]).toBe("Toadette");
    expect(component.message).toBe("");
  });

  it('should not allow a group of five players with unique names', () => {
    component.players = ["Alan", "Ethan", "Jake", "Ross", "Sally"];
    component.registerContestants(component.players);
    expect(component.message).toBe("You must enter contestants in groups of 2, 4, or 8. " +
    "No duplicate names are allowed. " +
    "Contestants have been reset. Please enter your contestants again.");
  });

  it('should not allow a group of three players with unique names', () => {
    component.players = ["Alan", "Ethan", "Jake"];
    component.registerContestants(component.players);
    expect(component.message).toBe("You must enter contestants in groups of 2, 4, or 8. " +
    "No duplicate names are allowed. " +
    "Contestants have been reset. Please enter your contestants again.");
  });

  it('should not allow a group of six players with unique names', () => {
    component.players = ["Alan", "Ethan", "Jake", "Ross", "Sally", "Sara"];
    component.registerContestants(component.players);
    expect(component.message).toBe("You must enter contestants in groups of 2, 4, or 8. " +
    "No duplicate names are allowed. " +
    "Contestants have been reset. Please enter your contestants again.");
  });

  it('should not allow a group of seven players with unique names', () => {
    component.players = ["Alan", "Ethan", "Jake", "Ross", "Sally", "Sara", "Tony"];
    component.registerContestants(component.players);
    expect(component.message).toBe("You must enter contestants in groups of 2, 4, or 8. " +
    "No duplicate names are allowed. " +
    "Contestants have been reset. Please enter your contestants again.");
  });
});
