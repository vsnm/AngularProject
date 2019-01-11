import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormDetailComponent } from './product-form-detail.component';

describe('ProductFormDetailComponent', () => {
  let component: ProductFormDetailComponent;
  let fixture: ComponentFixture<ProductFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
