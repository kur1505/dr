import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesStageComponent } from './diseases-stage.component';

describe('DiseasesComponent', () => {
  let component: DiseasesStageComponent;
  let fixture: ComponentFixture<DiseasesStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasesStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
