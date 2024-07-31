import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  link = ""
  constructor(private http: HttpClient, private route: ActivatedRoute, private slink: AppModule) { }


  name = ""
  bioid = ""
  rollnumber = ""
  class_ = ""
  section = ""
  edit_batch = ""

  hidden = true
  nonclass_count: any
  title = "Edit Form"
  class_id = ""
  student: any;

  batch = ""
  batchid = ""

  // std_id
  id = ""

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.link = this.slink.spring_link
    this.route.params.subscribe((par: any) => {
      this.name = par[1]
      this.bioid = par[0]
      this.rollnumber = par[3]
      this.class_ = par[2]
      this.section = par[4]
      this.class_id = par[5]
     
      this.http.get(this.link + "currentbatch").subscribe(
        (res: any) => {
          this.batch = res;
        
          this.batchid = res[0].batchId
          this.edit_batch = res[0].batch
        }
      )
      if (typeof this.name == 'undefined') {
        this.hidden = false
        this.title = "Add classes"


        this.http.get(this.link + "get_unknown_classes/bio", 
        { withCredentials: true })
        .subscribe(
          (res: any) => {this.student = res }
        );
      }
    })

  }


  
  onchange() {
    this.name = this.student.filter((std: any) => { return this.id == std[0] })
    console.log(this.name)
    this.name = this.name[0][1]
    console.log(this.name)
  }

  myform = {}
  updateform() {
    this.myform = {
      "stdClassId":this.class_id,
      "rollNumber": this.rollnumber,
      "classes1": {"classId":this.class_,"myclass_":this.class_},
      "batch": this.batch[0],
      "section": this.section,
      
    }
  }

  insform2() {
    this.myform = {
      "rollNumber": this.rollnumber,
      "section": this.section,
      "classes1": {"classId":this.class_,"myclass_":this.class_},
      "batch": this.batch[0]
    }
  }
  submit() {
    this.insform2()
    console.log(this.myform)
    if (!this.hidden) {
      this.http.post(this.link + "add/std_class/"+this.id, this.myform, { withCredentials: true, responseType: 'text' })
        .subscribe((res: any) => {
          console.log(res);
        })
    }
    else {
        this.updateform()
      console.log(this.myform)
      this.http.post(this.link + "update_class", this.myform, { withCredentials: true, responseType: 'text' })
        .subscribe(
          (res: any) => {
            alert(res)
            console.log(res)
          },
          err => {
            alert(err)
            console.log(err)
          }
        )
    }
  }

}
