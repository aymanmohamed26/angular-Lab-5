import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Istudent } from 'src/app/interfaces/student.interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  studentid:number = 0;
  Student:Istudent | undefined;
  
  constructor( private activatedROUTE: ActivatedRoute,private stdservice: StudentsService) {}
    ngOnInit(): void {
      this.studentid = this.activatedROUTE.snapshot.params['id'];
      this.Student = this.stdservice.GetById(this.studentid);
    }

}
