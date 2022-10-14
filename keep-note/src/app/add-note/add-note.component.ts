import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  saveNote(id:string,title:string,content:string){
    let newNote:Note ={
      id:parseInt(id),
      title:title,
      content:content
    }
    alert("Added the note")
    NOTES.push(newNote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
