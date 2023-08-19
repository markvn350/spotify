import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '../../../../shared/components/play-list-header/play-list-header.component';

@Component({
    selector: 'app-favorite-page',
    templateUrl: './favorite-page.component.html',
    styleUrls: ['./favorite-page.component.css'],
    standalone: true,
    imports: [PlayListHeaderComponent, PlayListBodyComponent]
})
export class FavoritePageComponent implements OnInit, OnDestroy {
constructor(private _trackservice: TrackService){}
  
observer$: Array<Subscription> =[];
observer1$:Subscription = new Subscription();
resultados: TrackModel[] = [];

  private readonly URL= environment.api;

  ngOnInit(): void {
    this.observer1$ = this._trackservice.getAllTracks$().subscribe((tracks: TrackModel[]) => {
      this.resultados = tracks;
  })
  this.observer$ = [this.observer1$]
}

  ngOnDestroy(): void {
    this.observer$.forEach(sub => sub.unsubscribe())
  }
}
