import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService implements OnInit{
  private Subject : Subject<string> =new Subject<string>()
  public Subject$ : Observable<string> =this.Subject.asObservable()

  private BheSubject : BehaviorSubject<string> = new BehaviorSubject<string>('by Default get one value')
  public  BheSubject$ : Observable<string> = this.BheSubject.asObservable()

  public dataEmiter : EventEmitter<string> = new EventEmitter<string>()
  
  
  constructor() { 
  }
  ngOnInit(): void {
   
  }
  getSubData(val : string){
    this.Subject.next(val)
    this.BheSubject.next(val)
  }
  NewDataSentMethod(val : string){
    this.dataEmiter.emit(val)
  }


}


