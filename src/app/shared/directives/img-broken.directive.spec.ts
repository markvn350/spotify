import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';



@Component({
    template: "<img appImgBroken class='testing-directive' [src]='mockImage'>",
    standalone: true
})

class TestComponent{
  public mockImage: any = null;
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TestComponent,
        ImgBrokenDirective]
})

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });


  it('should change image to a new one', (done: DoneFn) => {
    component.mockImage = undefined;
    const beforeImageEl = fixture.debugElement.query(By.css(".testing-directive")).nativeElement
    const beforeImgSrc =beforeImageEl.src;
    

    setTimeout(() =>{
      const afterImageEl = fixture.debugElement.query(By.css(".testing-directive")).nativeElement
      const afterImgSrc =beforeImageEl.src; 

      expect(afterImgSrc).toMatch(/\blinkDown\b/)
      done();
    },2000)
    
    
  });
});
