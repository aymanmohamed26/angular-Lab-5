import { Component } from '@angular/core';
import { Istudent } from 'src/app/interfaces/student.interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students:Istudent[] = [];
  constructor( private stdservice:StudentsService){}
    ngOnInit(): void {
  this.students = this.stdservice.GetAll();
    }
    delete(id:number){
      var res = confirm("Do you Want To delete it");
      if (res) {
       this.stdservice.delete(id);
      }
    }
}
