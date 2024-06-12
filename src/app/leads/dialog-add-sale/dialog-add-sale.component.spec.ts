import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddSaleComponent } from './dialog-add-sale.component';

describe('DialogAddSaleComponent', () => {
  let component: DialogAddSaleComponent;
  let fixture: ComponentFixture<DialogAddSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
