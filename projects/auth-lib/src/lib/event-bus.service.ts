import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EventBusService {

    private eventEmitter = new Subject();

    constructor() {
        console.log('EventBusService instance created');
    }

    emit(name, data) {
        this.eventEmitter.next({name, data});
    }

    getEmitterSubs() {
        return this.eventEmitter.asObservable();
    }
}