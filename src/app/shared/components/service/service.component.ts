import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [HttpService], // Provide the service here,
  standalone :true
})
export class ServiceComponent implements OnInit {

  constructor(private myService: HttpService) { }

  ngOnInit(): void {
    this.myService.getHttpData().subscribe(res => console.log(res) )
  }

}
