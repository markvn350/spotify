import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
    name: 'orderList',
    standalone: true
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = "asc" ): any {
    try{
      if(args === null) { 
        return value;
      }else{
        const tempList = value.sort((a, b) => {
          if(a[args] < b[args]){
            return -1;
          }
          else if ( a[args] == b[args]){
            return 0;
          }
          else if( a[args] > b[args]){
            return 1;
          }
          return 1;
        });
        console.log(tempList);
        return (sort == "asc" ) ? tempList : tempList.reverse();
      }
      

    }catch(e){
      console.log("there is an error")
      return value;
    }
  }

}
