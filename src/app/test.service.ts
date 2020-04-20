import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TestService{

  students :any[]=[
    {StudentId:1, Name:'Priti',Address:'Pune',Standred:3, Division:'A'},
    {StudentId:2, Name:'Avanessh',Address:'Pune',Standred:1, Division:'B'},
    {StudentId:3, Name:'Advik',Address:'Pune',Standred:2 , Division:'A'},
  ]
constructor() {
}


EditStu(id: number){
  for(let i=0; i<this.students.length; i++){
    if(this.students[i].StudentId === id){
      var stuEdit = this.students.map(function(item){
        return item.StudentId;
      }).indexOf(this.students[i].StudentId);
      console.log(stuEdit);
      var stdUpd = this.students[stuEdit];
      stdUpd.Name = "Priti";
    }
  }

}

StudentDel(id :number){
  for(let j =0;j<this.students.length; j++){
    if(this.students[j].StudentId === id){
      var stuDelete = this.students.map(function(item){
        return item.StudentId;
      }).indexOf(this.students[j].StudentId);
      console.log(stuDelete);
      this.students.splice(stuDelete,1);
    }
  }
}

getStudentinfo(id: number){
  if(this.students.length){
    for(let k=0; k<this.students.length; k++){
      if(this.students[k].StudentId === id){
        //console.log(this.students[k]);
        return this.students[k];
      }
    }
  }else{
    return [];
  }

}

addStudent(studentData:any){
this.students.push(studentData);
}

editStudent(data: any){

}
recordSearchByName(searchValue: any){
  for(let i=0; i<this.students.length;i++){
    console.log(searchValue);
    if(this.students[i].Name === searchValue) {
      return true;
    }else {
      return false;
    }

  }

  }


}
