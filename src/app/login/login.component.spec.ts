import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create form with 2 controls',() =>{
    // let user1=component.loginForm.form.contains('userName');
    // let pass1=component.loginForm.form.contains('password');
    expect(component.loginForm.form.contains('email'));
    expect(component.loginForm.form.contains('password'));
  });

  it('should make the username control required',fakeAsync(() =>{
    fixture.whenStable().then(()=>{
    let control = component.loginForm.form.controls['email'];
    control.setValue('');
    expect(control.valid).toBeFalsy();
    });
  }));

  it('should make the password control required',fakeAsync(() =>{
    fixture.whenStable().then(()=>{
    let control = component.loginForm.form.controls['password'];
    control.setValue('');
    expect(control.valid).toBeFalsy();
    });
  }));

  it('should make the username control minlength',fakeAsync(() =>{
    fixture.whenStable().then(()=>{
    let control = component.loginForm.form.controls['email'];
    control.setValue('ads');
    expect(control.valid).toBeFalsy();
    });
  }));

  it('should make the password control minlength',fakeAsync(() =>{
    fixture.whenStable().then(()=>{
    let control = component.loginForm.form.controls['password'];
    control.setValue('bds');
    expect(control.valid).toBeFalsy();
    });
  }));

  it('should make the email control with valid email',fakeAsync(() =>{
    fixture.whenStable().then(()=>{
    let control = component.loginForm.form.controls['email'];
    control.setValue('Thejas');
    expect(control.valid).toBeFalsy();
    });
  }));

  it('should make the password control minlength',fakeAsync(() =>{
    fixture.whenStable().then(()=>{
    let control = component.loginForm.form.controls['password'];
    control.setValue('thejas@28');
    expect(control.valid).toBeTruthy();
    });
}));
});
