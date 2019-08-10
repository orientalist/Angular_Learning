import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPiecesComponent } from './master-pieces.component';

describe('MasterPiecesComponent', () => {
  let component: MasterPiecesComponent;
  let fixture: ComponentFixture<MasterPiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
