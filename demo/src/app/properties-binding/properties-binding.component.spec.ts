import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesBindingComponent } from './properties-binding.component';

describe('PropertiesBindingComponent', () => {
  let component: PropertiesBindingComponent;
  let fixture: ComponentFixture<PropertiesBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
