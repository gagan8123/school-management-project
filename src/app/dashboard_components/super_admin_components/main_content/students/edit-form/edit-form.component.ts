import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  student: any;
  form: any;
  name: string = "";

  phone: String = "";
  admission_dat: string = "";
  dob: String = '';
  fathers_name: string = "";
  mothers_name: String = "";
  id = "";
  addres = "";
 

  hide_reg: boolean = true;
  Title = "Student Admission Form";

  link = ""


  constructor(private route: ActivatedRoute,
    private http:HttpClient,private spring:AppModule,private router:Router) { 
      this.link = spring.spring_link
    }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.student = params;
      console.log(Object.values(this.student).length)
      console.log((this.student===null))
      // Use the received parameter as needed
      if (Object.values(this.student).length) {
        this.name = this.student[7];
        
        this.fathers_name = this.student[4];
        this.mothers_name = this.student[6];
        this.phone = this.student[5];
        this.addres = this.student[1];
        this.admission_dat = this.student[2];
        this.dob = this.student[3]
        this.id = this.student[0]
        this.hide_reg = false;
        
        this.Title = "Edit Student form "
        
        
  
      }
    });



  }


  submit() {
    if(!this.hide_reg){
      this.setFormForupdate()
      console.log(this.form)
      this.http.post(this.link+"update/bio",this.form,{withCredentials:true,responseType:'text'})
      .subscribe(
        (res:any)=>{
          if(res == "saved successfully"){
            alert("saved successfully")
            this.router.navigate(["/dashboard/super_admin/student"])
          }
          else{
            alert("internal error occured")
          }
        },
        (err)=>{
          alert(err)
          alert("form error")
        }
      )
     
    }else{
      this.setFormForIns()
      console.log(this.form)
      this.http.post(this.link+"ins/std_bio",this.form,{withCredentials:true,responseType:"text"}).subscribe(
        (res:any)=>{
         alert(res)
         this.name = "";
        
        this.fathers_name = "";
        this.mothers_name = "";
        this.phone = "";
        this.addres = "";
        this.admission_dat = "";
        this.dob = ""
        this.id = ""
        },
        (err)=>{
          alert(err)
          alert("form error")
        }
      )
      
    }
  
  }

  convertToRevDate() {
    let v: any = this.dob.split("-")
    this.dob = v[2] + "-" + v[1] + "-" + v[0]

    let a: any = this.admission_dat.split("-")
    this.admission_dat = v[2] + "-" + v[1] + "-" + v[0]

  }


  setFormForIns() {
    this.form = {
      name: this.name,
      address: this.addres,
      dob: this.dob,
      fathersName: this.fathers_name,
      mothersName: this.mothers_name,
      mob_no: this.phone,
      admi_date:this.admission_dat
    }
  }
  setFormForupdate(){
    this.form = {
      bioId: this.id,
      name: this.name,
      address: this.addres,
      dob: this.dob,
      fathersName: this.fathers_name,
      mothersName: this.mothers_name,
      mob_no: this.phone,
      admi_date:this.admission_dat
    }

  }


}
