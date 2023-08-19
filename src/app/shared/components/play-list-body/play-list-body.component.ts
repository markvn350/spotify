import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';
import { HttpClient } from '@angular/common/http';
import { OrderListPipe as OrderListPipe_1 } from '../../pipe/order-list.pipe';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrls: ['./play-list-body.component.css'],
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe_1]
})
export class PlayListBodyComponent implements OnInit {
  constructor(private _httpclient: HttpClient) {}

  @Input() tracks: Array<TrackModel> = [];
  sortOption: {property: string | null  , sortType: "asc" | "desc" }  ={property:null , sortType:"asc" };
  changeSort(property:string){
    if(this.sortOption.sortType=="asc"){
      this.sortOption.sortType= "desc";
    }else this.sortOption.sortType="asc"
    this.sortOption.property=property;
  }
  ngOnInit(): void {
    
    
  }
}
