import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProductComponent } from './api-product.component';

describe('ApiProductComponent', () => {
  let component: ApiProductComponent;
  let fixture: ComponentFixture<ApiProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
