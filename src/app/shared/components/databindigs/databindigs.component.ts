import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindigs',
  templateUrl: './databindigs.component.html',
  styleUrls: ['./databindigs.component.scss'] ,
  
})
export class DatabindigsComponent implements OnInit {
  public oneWayBind : string = 'one way data Bindings'
  public inputdata !: string
  constructor() { }

  ngOnInit(): void {
  }
  onClick(eve : any){
   console.log(eve);
  }

}
