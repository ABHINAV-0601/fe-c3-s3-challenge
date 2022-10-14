import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  noteTitle:string=""

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  searchFruit() {
    this.searchTextChanged.emit(this.noteTitle);
  }

  clearSearch() {
    this.noteTitle = "";
    this.searchTextChanged.emit(this.noteTitle);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
