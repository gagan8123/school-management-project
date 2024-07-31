import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';


@Component({
  selector: 'app-student-side-bar',
  templateUrl: './student-side-bar.component.html',
  styleUrls: ['./student-side-bar.component.css']
})
export class StudentSideBarComponent implements OnInit {

  constructor(private http:HttpClient, likss:AppModule){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
