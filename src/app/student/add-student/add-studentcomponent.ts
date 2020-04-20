import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
})
export class AddStudentComponent implements OnInit {

  constructor( private ser : TestService) {

   }

  onSubmit(student: NgForm){
  this.ser.addStudent(student.value);
  }


  submitData(){


  }

  ngOnInit(): void { }
}
