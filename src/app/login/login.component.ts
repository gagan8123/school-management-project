import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppModule,  } from '../app.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  formData: any = {}; // Object to store form data
  userId: any ; // Initialize name variable
  password:any;
  user:any;
  sprin_link:string;
  constructor(private http: HttpClient,private router: Router,private appmodule:AppModule) {
    this.sprin_link = appmodule.spring_link;
  }
  ngOnInit(): void {
    this.http.get(this.sprin_link+"check_cookie",{withCredentials:true, responseType: 'text'})
    .subscribe(
      (res)=>{
          if(res){
          if(res == "super_admin"){
          this.router.navigate(["/super_admin"]);
          }
          else{
            this.router.navigate(["/dashboard/admin"]);
          }
        }
        
      }  
    )
  }

  prepareFormData(): void {
    // Prepare form data into JSON format
    this.formData = {
      userId: this.userId,
      pass: this.password,
      userType: this.user
      // Add more fields as needed
    };
  }

  onSubmit() {
    console.log("submitting")
    console.log(this.user);
    this.prepareFormData();
    // this.router.navigateByUrl('/dashboard/admin');
    console.log(this.formData);
    //Send form data to backend
    return this.http.post('http://localhost:8080/login', this.formData,{ withCredentials: true })
      .subscribe(
        response => {
          // Handle response from server
          console.log('Form submission successful!', response);
          if(response){
            this.ngOnInit()
          }
          
        },
        error => {
          // Handle error
          console.error('Error submitting form:', error);
        }
      );
  }

  logout(){
    this.http.get('http://localhost:8080/clearCookie',{ withCredentials: true })
    .subscribe(
      response => {
        console.log('Form submission successful!', response);
      },
      error => {
        // Handle error
        console.error('Error submitting form:', error);
      }
    );
  }

}
