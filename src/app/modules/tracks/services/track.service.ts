import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, map, of, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, filter, tap } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);

  private readonly URL= environment.api;

  constructor(private _httpclient: HttpClient) {}

    getAllTracks$(): Observable<any>{
      return this._httpclient.get(this.URL+'/tracks', {
        // headers: new HttpHeaders({authorization: "Bearer TOKEN"}) forma inadecuada
      }
        
      ).pipe(
        map((dataRaw: any) => {
          return dataRaw.data;
        })
      )
    }

    private skipById( listTracks: TrackModel[], id: number): Promise<TrackModel[]>{
      return new Promise<TrackModel[]>((resolve, reject) => {
        const listTmp = listTracks.filter(track => track._id !== id);
        resolve(listTmp);
      })
    }

    getAllRamdoms$(): Observable<any>{
      return this._httpclient.get(this.URL+'/tracks', {
        // headers: new HttpHeaders({authorization: "Bearer TOKEN"}) forma inadecuada
      }).pipe(
        mergeMap((data: any) => this.skipById(data.data, 1)),
        catchError((err)=>{
          console.log(err, "Loading Error");
          return of([])
        }),
        // map(({data}: any) => {
        //   return data.reverse();
        //}) )
    )}
    // const {data}:any =( dataRaw as any).default
    // this.dataTracksTrending$ = of(data);
    // this.dataTracksRandom$ = new Observable(observer =>{

    //   const trackExample: TrackModel ={
    //     _id: 9,
    //     name: "In the end",
    //     album: "Hybrid Theory ",
    //     duration: 216,
    //     url: "http://",
    //     cover: "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg"
    //   }
    //   setTimeout(() => {
    //     observer.next([trackExample]);
    //   }, 2500);
      
    // });
      
      
    
    

      
      
   
}
