import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtochartComponent } from './addtochart.component';

describe('AddtochartComponent', () => {
  let component: AddtochartComponent;
  let fixture: ComponentFixture<AddtochartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtochartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
