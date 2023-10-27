import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Istudent } from 'src/app/interfaces/student.interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  Student:Istudent = {
    id: 0,
    name: '',
    address: '',
    age: 0,
    school: ''
  }
  constructor(private stdservice:StudentsService , private activatedroute:ActivatedRoute ,private router:Router){
  }
  studentid:number=0;
   ngOnInit(): void {
    this.studentid = this.activatedroute.snapshot.params['id'];
    if (this.studentid != 0) {
     let std = this.stdservice.GetById(this.studentid);
     if (std) {this.Student = std}
    }
   }
 
  GetDate(e:Event){
   e.preventDefault();
   // Edit
   if (this.studentid) {
     this.stdservice.edit(this.studentid,this.Student);
   }
   // add
   else{
     this.stdservice.add(this.Student);
   }
   // redirection
   this.router.navigate(['/Student']);
  }
 
}
