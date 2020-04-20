import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TestService} from './../../test.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentId:any;
  stuId:any;
  demo :any;
  studentDetail:any;
  studentData1: any;

  constructor(private activatedRoute : ActivatedRoute,
              private studentser :TestService) {
                this.demo = studentser;

              this.studentDetail = this.studentData();
            }

  studentData(){
    //get id from url parameter
    this.studentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.stuId = parseInt(this.studentId);
    console.log(this.stuId);
    //pass id to getStentinfo
    this.studentData1 = this.demo.getStudentinfo(this.stuId);
    console.log(this.studentData1);
     return this.studentData1;
}

onEdit(editStudent: NgForm){
  this.studentser.editStudent(editStudent.value);

}

  ngOnInit() {
  }
}
