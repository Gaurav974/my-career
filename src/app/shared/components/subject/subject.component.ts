import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects/subjects.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
   user: any ={
    name :'gaurav'
   }

  constructor(private _SubjectsService : SubjectsService) { }

  ngOnInit(): void {
    this._SubjectsService.Subject$.subscribe(res =>{
      console.log(res)
    })
    // this._SubjectsService.BheSubject$.subscribe(res =>{
    //   console.log(res)
    // })
    
    // this._SubjectsService.dataEmiter.subscribe(res =>{
    //   console.log(res);
    // })
  }
  OnClick(inp : string){
    this._SubjectsService.getSubData(inp)
    this._SubjectsService.getSubData(inp)
    this._SubjectsService.NewDataSentMethod(inp)

  }

}
