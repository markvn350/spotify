import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaServiceService } from '@shared/services/multimedia-service.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrls: ['./card-player.component.css'],
    standalone: true,
    imports: [NgIf, ImgBrokenDirective, NgClass]
})
export class CardPlayerComponent {
  @Input() mode:"small" | "big" = "big";
  

  @Input() track: TrackModel ={
            "_id": 1,
            "name": "Getting Over",
            "album": "One Love",
            "cover": "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
            "artist":"David Guetta",
                
            "duration": 333,
            
            "url": "http://localhost:3001/track.mp3"
  }

  constructor (private _multimediaService: MultimediaServiceService){
    
  }

  sendPlay(track: TrackModel){
    console.log('Enviando canción al reproductor..... ', track);
    
    this._multimediaService.trackInfo$.next(track);
  }
}
