import { Status } from './status.enum';

export class ToDoEntry {
    private status: Status;

    constructor(private id: number, private title:string, private priority: number){
        this.status = Status.PENDING;
    }

    getId():number{
        return this.id;
    }

    increasePriority(){
        if(this.priority < 5){
            this.priority += 1;
        }
    }

    decreasePriority(){
        if(this.priority > 0){
            this.priority -= 1;
        }
    }

    markCompleted(){
        if(this.status == Status.PENDING){
            this.status = Status.COMPLETED;
        }
    }

    markPending(){
        if(this.status == Status.COMPLETED){
            this.status = Status.PENDING;
        }
    }
}
