import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  public isavlable : boolean = true
  public arr =[
    {
      Name :'gaurav'
    },
    {
      Name :'Shubham'
    },
    {
      Name :'ravi'
    }
  
  ]
  public color :string =''
  public ngclass :boolean =true
  constructor() { }

  ngOnInit(): void {
  }

}
