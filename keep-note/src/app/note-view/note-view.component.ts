import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  notes:Note[]=NOTES
  
  onSearchTextChanged(noteTitle: string) {
    if(noteTitle === '' || !noteTitle)
      this.notes = NOTES;
    else
    {
      this.notes =NOTES;
      this.notes= this.notes.filter(note => note.title?.startsWith(noteTitle.toLowerCase()));
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
