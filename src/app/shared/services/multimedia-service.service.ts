import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaServiceService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  public audio: HTMLAudioElement = new Audio();
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public elapsedTime$ : BehaviorSubject<string> = new BehaviorSubject("00:00");
  public remaining$ : BehaviorSubject<string> = new BehaviorSubject("-00:00 ");
  public playerStatus$ : BehaviorSubject<string> = new BehaviorSubject("paused");
  public playerPercentage$ : BehaviorSubject<number> = new BehaviorSubject(0);

  // myObservable1$: Subject<any> = new Subject

  // myObservable1$: Observable<any> = new Observable(
  //   (observer: Observer<any>) => {
  //     observer.next("===============>>>>>>"),
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 1500);
  //     setTimeout(() => {
  //       observer.error(">><<");
  //     }, 3500);

      
  //   }
  // )
   

  constructor() {
    this.trackInfo$.subscribe((res) => {
      if (res){
        this.setAudio(res);
      }
    });
    this.listenAllEvents();
    
  }
    percentage: number = 0;
   
    private listenAllEvents(): void{
      this.audio.addEventListener("timeupdate", (this.calculateTime), false);
      this.audio.addEventListener("playing", this.setPlayerStatus, false);
      this.audio.addEventListener("pause", this.setPlayerStatus, false);
      this.audio.addEventListener("ended", this.setPlayerStatus, false);
      this.audio.addEventListener("play", this.setPlayerStatus, false);

    }

    private setPercentage(currentTime: number, duration: number): void{

      this.percentage =(currentTime / duration)*100;
      this.playerPercentage$.next(this.percentage);
    }

    private setPlayerStatus = (state: any) =>{
      switch(state.type){
        default:
          this.playerStatus$.next("paused");
        break;
        case "playing":
          this.playerStatus$.next("playing");  
        break;
        case "ended":
          this.playerStatus$.next("ended");
        break;
        case "play":
          this.playerStatus$.next("play");
        break;
        case "paused":
          this.playerStatus$.next("paused");
        break;

      }
    }

    private calculateTime = () =>{
      const { duration, currentTime } = this.audio;
      this.elapsedTime$.next(this.setTime(currentTime));
      this.remaining$.next("-"+this.setTime((duration-currentTime)));
      this.setPercentage(currentTime, duration);
      
    }

    setTime( currentTime: number){
      let seconds = Math.floor(currentTime % 60);
      let minutes = Math.floor((currentTime / 60) % 60);

      const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
      const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
      const displayFormat = `${displayMinutes}:${displaySeconds}`;
      return displayFormat;
    }


   public togglePlayer(){
      if(this.audio.paused){
        this.audio.play();
      }
      else {
        this.audio.pause();
      }


   }
    

    setAudio(track: TrackModel){
      this.audio.src = "http://localhost:3001"+ track.url;
      console.log(this.audio.src)
      this.audio.play();
    }

    seekAudio(percentageFromX: number){
      let {duration} = this.audio;
      if(Number.isNaN(duration)) {
        duration = 0;
      }
      this.audio.currentTime = (percentageFromX/100) * duration;
     
    }



  
}
