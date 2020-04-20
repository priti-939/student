import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {TestService} from './../test.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',

})
export class StudentComponent implements OnInit {
    studentInfo :any ;
    student:any[] = [];
   constructor(private std : TestService,
              private _router:Router)
              {
     this.studentInfo = std;
     this.student =this.studentInfo.students;
  }
  ngOnInit(): void { }

  deleteStu(id:number){
    this.studentInfo.StudentDel(id);
  }


}
