import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoretor',
  templateUrl: './decoretor.component.html',
  styleUrls: ['./decoretor.component.scss']
})
export class DecoretorComponent implements OnInit {
  public getDataToparent ! :string
  constructor() { }

  ngOnInit(): void {
  }
  getValDeco(eve : string){
   console.log(eve);
   this.getDataToparent =eve
  }

}
