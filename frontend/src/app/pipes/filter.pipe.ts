import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string): any[] {
    const resArray = [];
    if (value.length === 0 || filterString === '')
      return value;
    for (const item of value) {
      if (
        item['firstname'] === filterString ||
        item['surname'] === filterString ||
        item['email'] === filterString ||
        item['cellphone'] === filterString ||
        item['invoiceTotal'] === filterString
      )
        resArray.push(item);
    }
    return resArray;
  }
}
