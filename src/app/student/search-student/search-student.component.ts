import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'search-student',
  templateUrl: './search-student.component.html',

})
export class SearchStudentComponent implements OnInit {
  studentData: any;
  studentRecord:any;
  searchStdId:number;
  constructor(ser : TestService) {
      this.studentData = ser;
      this.studentRecord =this.studentData.students;
   }

  ngOnInit(): void { }


  searchRecord(serachdata : NgForm){
  this.studentData.recordSearchByName(serachdata.value);
    //console.log(serachdata.value);


  }
}
