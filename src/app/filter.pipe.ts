import { Pipe, PipeTransform } from '@angular/core';
import { Smile } from './models/smile.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Smile[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item.name.toLowerCase().includes(searchText);
    });
   }
}