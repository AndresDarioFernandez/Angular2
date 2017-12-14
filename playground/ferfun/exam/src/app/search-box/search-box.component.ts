import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent {
  @Input()
  text:string;

  @Output()
  search = new EventEmitter();

  clear(box) {
      box.value = '';
  }

  onSearch(searchText) {
      this.search.emit(searchText);
  }
}
