import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginPageComponent } from './login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule, LoginPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be invalid', () => {

    //Arrange
    const mockCredentials ={
      email: "0x0x0x0x0x0x00x0x",
      password: "1234567890123456789012345678",
    }

    const emailForm:any = component.formLogin.get("email");
    const passwordForm:any = component.formLogin.get("password")
    //Act

    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password)

    //Assert

    expect(component.formLogin.invalid).toBeTruthy();
  });

  it('should incate iniciar sesion', () => {

    const elementRef = fixture.debugElement.query(By.css(".form-action"));
    const elementText =elementRef.nativeElement.innerText;



    expect(elementText).toEqual("Iniciar sesión");
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
