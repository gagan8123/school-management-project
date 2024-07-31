import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css']
})
export class MarksTableComponent implements OnInit {
  link = ""
  batch: any;
  classs = ""

  batchid = ""

  searchTerm = ""


  marks: any;
  marksfilter: any;

  columnname: any = 0


  constructor(private http: HttpClient, link: AppModule, private route: ActivatedRoute) {
    this.link = link.spring_link
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //class
    this.route.params.subscribe((params: any) => {
      this.classs = params[0]
    })
    //batch
    this.http.get(this.link + "currentbatch").subscribe(
      (res: any) => {
        this.batch = res;
        this.batchid = res[0].batchId
        this.getmarks();

      })



  }







  filterTable() {
    let col = parseInt(this.columnname)
    this.marksfilter = this.marks.filter((student1: any) => student1[col].toString().toLowerCase().includes(this.searchTerm.toLowerCase()));
  }




  getmarks() {
    this.http.get(this.link + "get/marks/" + this.batchid + "/" + this.classs).subscribe(
      (res: any) => {
        this.marks = res;
        this.marksfilter = res;
      }
    )

  }

}
