import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStatus: string, propName: string): any {
    if (filterStatus.length === 0 || filterStatus === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterStatus) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
