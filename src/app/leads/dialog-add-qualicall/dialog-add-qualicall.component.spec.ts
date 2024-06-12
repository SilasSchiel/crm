import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddQualicallComponent } from './dialog-add-qualicall.component';

describe('DialogAddQualicallComponent', () => {
  let component: DialogAddQualicallComponent;
  let fixture: ComponentFixture<DialogAddQualicallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddQualicallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddQualicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
