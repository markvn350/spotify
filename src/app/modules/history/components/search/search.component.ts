import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class SearchComponent {

  @Output() callBackData: EventEmitter<any> = new EventEmitter();

  constructor(private _httpclient: HttpClient) {}

  src:string = "";

  callSearch($event:any){
    
    if($event.length  >= 4){
      console.log($event)
      this.callBackData.emit($event)
    }
  }

}
