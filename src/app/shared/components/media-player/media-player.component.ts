import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaServiceService } from '@shared/services/multimedia-service.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';


@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css'],
    standalone: true,
    imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover!: TrackModel ;
  @ViewChild ("progressBar") progressBar : ElementRef = new ElementRef("");

  constructor(public _multimediaService: MultimediaServiceService) { }
  observers$: Array<Subscription> = [];
  observer1$: Subscription = new Subscription(); 
    
  state: string  = "paused";
  
  handlePosition(event: MouseEvent): void {
    const {clientX} = event;
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const {x, width} = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX / width)*100;
    this._multimediaService.seekAudio(percentageFromX);
    
  }

  ngOnInit(): void {
    
    this.observer1$ = this._multimediaService.trackInfo$.subscribe(track => {
      console.log("Contenido de la cancion" , track);
      this.mockCover = track;
    });

    const observer2$ = this._multimediaService.playerStatus$.subscribe(status => {
      this.state = status;
      
    });

    // const observer1$: Subscription = this._multimediaService.callback.subscribe(
    //   (response: TrackModel)=>{
    //     console.log('Recibiendo cancion...  ', response)
    //   })

      this.observers$ = [this.observer1$, observer2$] ;
  }
  ngOnDestroy(): void {
    console.log('BOOOOOOOOM!!!!!!!');
    this.observers$.forEach(u => u.unsubscribe());
    
  }

}
