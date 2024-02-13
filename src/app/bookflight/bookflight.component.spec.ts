import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BookflightComponent } from './bookflight.component';

describe('BookflightComponent', () => {
  let component: BookflightComponent;
  let fixture: ComponentFixture<BookflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookflightComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule],
      providers:[DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
