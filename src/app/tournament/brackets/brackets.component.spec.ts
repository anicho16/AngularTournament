import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsComponent } from './brackets.component';
import { RosterService } from '../../services/roster.service';

describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let fixture: ComponentFixture<BracketsComponent>;
  let service: RosterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketsComponent ],
      providers: [ RosterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(RosterService);
    fixture.detectChanges();
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display winner if only one winner in array', () => {
    component.winners = ["Jared"];
    service.addContestant("Jared");
    service.addContestant("Nick");
    component.completeRound(component.contestants);
    expect(component.message).toBe("Winner: Jared");
  });

  it('should increase round number from 1 to 4', () => {
    component.winners = ["Jared", "Nick", "Bobby", "Yuna"];
    expect(component.roundNumber).toBe(1);
    component.completeRound(component.contestants);
    component.completeRound(component.contestants);
    component.completeRound(component.contestants);
    expect(component.roundNumber).toBe(4);
  });

  it('should have one winner after rounds with four beginning players', () => {
    component.contestants = ["Jared", "Nick", "Bobby", "Yuna"];
    component.completeRound(component.contestants);
    component.completeRound(component.contestants);
    component.winners = ["Jared"];
    expect(component.roundNumber).toBe(1);
    expect(component.message).toBe("Winner: Jared");
  });

  it('should have one winner after rounds with eight beginning players', () => {
    component.contestants = ["Jared", "Nick", "Bobby", "Yuna", "Bill", "Mike", "Kay", "June"];
    component.completeRound(component.contestants);
    component.completeRound(component.contestants);
    component.winners = ["Jared"];
    component.completeRound(component.contestants);
    expect(component.roundNumber).toBe(1);
    expect(component.message).toBe("Winner: Jared");
  });
});
