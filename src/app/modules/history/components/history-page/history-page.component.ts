import { Component, EventEmitter, Output } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css'],
    standalone: true,
    imports: [SearchComponent, PlayListBodyComponent, AsyncPipe]
})
export class HistoryPageComponent {
  listResults: Observable<any> = of([]);
  constructor(private _searchservice: SearchService){}
  
  reciveData(event:string){
      console.log("data padre" ,event);
      this.listResults = this._searchservice.searchTracks$(event)
    }

}
