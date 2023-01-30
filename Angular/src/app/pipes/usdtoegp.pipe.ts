import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoegp'
})
export class UsdtoegpPipe implements PipeTransform {

 
  transform(val:number,ExRate:number=16.5): number {
    return val*ExRate;
  }

}
