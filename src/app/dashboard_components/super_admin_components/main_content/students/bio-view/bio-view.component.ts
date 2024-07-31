import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface stdent {
  name: string;
  student_id: string;
  Father_name: string;
  Mother_name: string;
  Address: string;
  Register: string;
  dob: string;
  mobile: string;
  admin_date: string;

}



@Component({
  selector: 'app-bio-view',
  templateUrl: './bio-view.component.html',
  styleUrls: ['./bio-view.component.css']
})

export class BioViewComponent {
  students: any[] = [];
  spring_link: string = "";

  searchBy: string = '';
  searchText: string = '';
  results: any[] = [];

  batchid = ""

  class: string = "";
  batch: any;

  columnName: string = "0";
  text: String = "";



  hide: boolean = true;
  constructor(private http: HttpClient, spring_link: AppModule, private route: ActivatedRoute) {
    this.spring_link = spring_link.spring_link;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get(this.spring_link + "currentbatch").subscribe(
      (res: any) => {
        this.batch = res;
        console.log(res)
        this.batchid = res[0].batchId
      }
    )


  }


  fetch() {
    if (this.class != "" && this.batch != "") {
      this.http.get(this.spring_link + "get_bio/" + this.batchid + "/" + this.class, { withCredentials: true })
        .subscribe(
          (res: any) => {
            this.students = res;
            this.results = res

            this.hide = false

          }
        )
      console.log(this.results);



    }
    else {
      alert("plse fill the box")

    }

  }


  onSearch() {
    let col = parseInt(this.columnName)
    this.results = this.students.filter(student => student[col].toString().toLowerCase().includes(this.text.toLowerCase()));
    console.log(this.results)
  }


  del(id: number) {
    this.http.get(this.spring_link + "del/" + id, { withCredentials: true, responseType: 'text' }).subscribe(
      res => {
        alert(res)
        
        this.fetch()
      }
    )
  }


}




