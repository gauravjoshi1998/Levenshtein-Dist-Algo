import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodzComponent } from './noodz.component';

describe('NoodzComponent', () => {
  let component: NoodzComponent;
  let fixture: ComponentFixture<NoodzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoodzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
