import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-marks-view',
  templateUrl: './marks-view.component.html',
  styleUrls: ['./marks-view.component.css']
})
export class MarksViewComponent {
  Subject :any

  marks : any

  link = ""

  constructor(link: AppModule,private http:HttpClient){
    this.link = link.spring_link
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.http.get()
    
  }

}
