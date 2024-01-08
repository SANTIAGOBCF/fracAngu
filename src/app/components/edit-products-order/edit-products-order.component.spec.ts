import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductsOrderComponent } from './edit-products-order.component';

describe('EditProductsOrderComponent', () => {
  let component: EditProductsOrderComponent;
  let fixture: ComponentFixture<EditProductsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProductsOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProductsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
