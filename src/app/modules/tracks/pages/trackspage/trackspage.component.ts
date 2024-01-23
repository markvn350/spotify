import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// import * as dataRaw from "../../../../data/tracks.json"
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { SectionGenericComponent } from '../../../../shared/components/section-generic/section-generic.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-trackspage',
    templateUrl: './trackspage.component.html',
    styleUrls: ['./trackspage.component.css'],
    standalone: true,
    imports: [SectionGenericComponent, CommonModule]
})
export class TrackspageComponent  implements OnInit, OnDestroy{
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  
  @Input() currentUser: any;
  constructor(private _trackService: TrackService) {
    
   }
  observer$: Array<Subscription> =[];
  observer1$:Subscription = new Subscription();
  observer2$:Subscription = new Subscription();
  
 

  ngOnInit(): void {
    
    this.loadData();
    this.loadDataRandom();
    this.observer$= [this.observer1$, this.observer2$];
    // const observer1$: Subscription = this._trackService.dataTracksTrending$.subscribe(data => {
    //   this.tracksTrending = data;
    //   this.tracksRandom = data;
    
    // })

    // const observer2$: Subscription = this._trackService.dataTracksRandom$.subscribe(data => {
    //     this.tracksRandom = [...this.tracksRandom, ...data];
    // })
  
    // this.observer$= [observer1$, observer2$];
  }

  loadData():void{
    this.observer1$ = this._trackService.getAllTracks$().subscribe((data: TrackModel[]) =>{
      this.tracksTrending = data;
    });
    
  }
  
  loadDataRandom():void{
     
      this.observer2$ = this._trackService.getAllRamdoms$().subscribe((data: TrackModel[]) =>
      {
          this.tracksRandom = data;
      });
   
  }

  ngOnDestroy(): void {
    this.observer$.forEach(sub => sub.unsubscribe());
  }



  //   const data = (dataRaw as any).default
  //   this.mockTrackList= data.data;
  // }


}
