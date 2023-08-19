import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
    selector: '[appImgBroken]',
    standalone: true
})
export class ImgBrokenDirective {
  @Input() loadImage: string | boolean = false;
  @HostListener('error') handleError(): void {
    const elNative =this.imgHost.nativeElement;
    if(this.loadImage){
      elNative.src = this.loadImage
    } else {  
      elNative.src = '../assets/Images/linkDown.jpg'
      console.log("Broken image link")
    }
  }
  constructor( private imgHost: ElementRef) { 
    
  }

}
