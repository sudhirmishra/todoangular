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
    this.addEntry('Dummy Entry 1', 1);
    this.addEntry('Dummy Entry 2', 3);
    this.addEntry('Dummy Entry 3', 2);
    this.addEntry('Dummy Entry 4', 1);
    this.addEntry('Dummy Entry 5', 3);
    this.addEntry('Dummy Entry 6', 2);
  }

  private getUniqueId():number{
    EntryService.id += 1;
    return EntryService.id;
  }

  addEntry(title:string, priority:number):void{
    this.entries.push(new ToDoEntry(this.getUniqueId(), title, priority));
  }

  removeEntry(entry:ToDoEntry):ToDoEntry[]{
    this.entries = this.entries.filter(  
      e => e.getId() != entry.getId()
    );
    return this.entries;
  }

  getEntry(id:number){
    return this.entries.find( e => e.getId() == id);
  }

  getEntries():ToDoEntry[]{
    return this.entries;
  }


}
