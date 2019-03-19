import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedComponent } from './removed.component';

describe('RemovedComponent', () => {
  let component: RemovedComponent;
  let fixture: ComponentFixture<RemovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
