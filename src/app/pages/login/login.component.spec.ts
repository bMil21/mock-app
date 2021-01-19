import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from 'src/app/testing/router-link-directive-stub';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        LoginComponent,
        RouterLinkDirectiveStub
      ],
      providers: [
        RouterLinkDirectiveStub
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to home page', () => {
    const loginDe = fixture.debugElement.query(By.css('#login-button'));
    const routerLinkDirective = loginDe.injector.get(RouterLinkDirectiveStub);
    expect(loginDe.nativeElement.textContent).toEqual('Login');

    expect(routerLinkDirective.linkParams).toEqual(['/home']);
    expect(routerLinkDirective.navigatedTo).toBeNull('should not have navigated yet');

    loginDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(routerLinkDirective.navigatedTo).toEqual(['/home']);
  });
});
