import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students : Istudent[] = [
    {id:1,name:"Ahmed",address:"Minia",age:25,school:"boys"},
    {id:2,name:"Amna",address:"sohag",age:24,school:"girls"},
    {id:3,name:"Mohamd",address:"Minia",age:25,school:"boys"},
    {id:4,name:"Asmaa",address:"Sohag",age:24,school:"girls"},
    {id:5,name:"Hamed",address:"Minia",age:25,school:"boys"},
  ];

  constructor() {}

   GetAll():Istudent[]{
    return this.students;
   }

   GetById(id:number): Istudent | undefined{
    return this.students.find(S => S.id == id);
   }
   
   add(std:Istudent): void{
    let nextid = this.students[this.students.length - 1].id +1;
    std.id = nextid;
    this.students.push(std);
   }

   edit(id:number,std:Istudent):void{
    let index=this.students.findIndex(p=> p.id==id);
    if (index != -1) {
      this.students[index].name = std.name;
      this.students[index].age = std.age;
      this.students[index].address = std.address;
      this.students[index].school = std.school;
    }
   }
   delete(id:number):void{
    let index=this.students.findIndex(p=> p.id==id);
    if (index != -1)
    {
      this.students.splice(index,1);
    }
   }
}
