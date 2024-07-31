import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from 'src/app/app.module';


@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit{
  nonClass: any;
  nonclass_count = 0;

  classs = "";
  batch: any
  searchTerm: string = '';
  students: any[] = [];
  link = ""

  batchid = ""


  colum: string = "0"

  constructor(private http: HttpClient, link: AppModule, private route: ActivatedRoute) {
    this.link = link.spring_link
  }
  filteredStudents: any

  ngOnInit(): void {
    this.filteredStudents = this.students;
    this.route.params.subscribe((params: any) => {
      this.classs = params[0]
    })

    this.http.get(this.link + "get/un_registered_classes", { withCredentials: true }).subscribe(
      (res: any) => {
        // this.nonClass = res
        // console.log(this.nonClass.length)
        this.nonclass_count = res
      }
    );

    

    this.http.get(this.link + "currentbatch").subscribe(
      (res: any) => {
        this.batch = res;
        this.batchid = res[0].batchId

        this.http.get(this.link + "get_class/" + this.batchid + "/" + this.classs + "", { withCredentials: true })
          .subscribe(
            (res: any) => {
              this.students = res
              this.filteredStudents = res
              console.log(this.students)
            }
          )

      }
    )


  }

  filterTable(): void {
    let col = parseInt(this.colum)
    this.filteredStudents = this.students.filter(student1 => student1[col].toString().toLowerCase().includes(this.searchTerm.toLowerCase()));
    console.log(this.filteredStudents)
  }

  delete(id: number) {
    this.http.get(this.link + "del/std_class/" + id, { withCredentials: true, responseType: "text" })
      .subscribe(
        (res: any) => {
          alert(res)
        }
      )
    window.location.reload();
  }

  fetc(){
    this.http.get(this.link + "get_class/" + this.batchid + "/" + this.classs + "", { withCredentials: true })
          .subscribe(
            (res: any) => {
              this.students = res
              this.filteredStudents = res
              console.log(this.students)
            }
          )
  }
}