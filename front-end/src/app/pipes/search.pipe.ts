import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchText?: string): any[] {
    if(!items) return null;
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    
    return items.filter( it => {
        return JSON.stringify(it.name).toLowerCase().includes(searchText);
    });
  }
}

