import { Component, OnInit } from '@angular/core';
import { GetService } from '../core/services/getapi.service';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(private getService: GetService) { }

  ngOnInit() {
    /* const params = {ClientId: 1};
    this.getService.getOpenCases(params).subscribe(data=>{
      console.log("Open Cases : ",data);
    }); */
  }

}
