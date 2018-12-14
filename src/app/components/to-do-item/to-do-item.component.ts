import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { ToDoEntry } from '../../models/to-do-entry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  entries: ToDoEntry[];
  constructor(private entryService: EntryService, private router: Router) { }

  ngOnInit() {
    this.entries = this.entryService.getEntries();
  }

  removeEntry(entry:ToDoEntry){
    this.entries = this.entryService.removeEntry(entry);
  }

  increasePriority(entry: ToDoEntry){
    entry.increasePriority();
  }

  decreasePriority(entry: ToDoEntry){
    entry.decreasePriority();
  }

  markCompleted(entry: ToDoEntry){
    entry.markCompleted();
  }

}
