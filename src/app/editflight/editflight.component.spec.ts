import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EditflightComponent } from './editflight.component';

describe('EditflightComponent', () => {
  let component: EditflightComponent;
  let fixture: ComponentFixture<EditflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditflightComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule],
      providers:[DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
