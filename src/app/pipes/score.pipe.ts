import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "score"
})
export class ScorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value > 0) {
      return '<h2 class ="text-success"> +' + value + '</h2>';
    } 
    else if(value < 0){
      return '<h4 class ="text-danger"> ' + value + '</h4>';
    }else{
      return '<h2 class ="text-warning"> ' + value + '</h2>';
    }
  }
}
