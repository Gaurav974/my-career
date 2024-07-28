import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']

})
export class ChildComponent implements OnInit {
  public data ='Send Data chid to parent'
  @Input() inputDeco ! : string
  @Output() OutputDeco : EventEmitter<string> =new EventEmitter<string>()
  @ViewChild('viewdata') viewdata  ! : ElementRef<any>
  constructor() {
   }
   
  ngOnInit(): void {
    setTimeout(() => {
      this.OutputDeco.emit(this.data)
      console.log(this.data)
    },1000);
   
  }
  getTheData(){
    let  val = this.viewdata.nativeElement as HTMLInputElement
    console.log(val.value);
  }

}
