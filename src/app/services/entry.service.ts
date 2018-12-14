import { Injectable } from '@angular/core';
import { ToDoEntry } from '../models/to-do-entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private entries: ToDoEntry[];
  private static id: number = 0;

  constructor() {
    this.entries = [];
  }

  private getUniqueId():number{
    EntryService.id += 1;
    return EntryService.id;
  }

  addEntry(title:string, priority:number):void{
    this.entries.push(new ToDoEntry(this.getUniqueId(), title, priority));
  }

  removeEntry(entry:ToDoEntry):void{
    this.entries = this.entries.filter( e => {
      e.getId() != entry.getId()
    });
  }

  getEntry(id:number){
    return this.entries.find( e => e.getId() == id);
  }


}
