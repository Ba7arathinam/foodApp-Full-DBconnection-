import { Component } from '@angular/core';
import {  Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
 
  constructor(private router: Router) {}
  // toLogin(){
  //   this.router.navigate(['signup']);
  // }
  login(email: string, password: string): Promise<any> {
    const data = {
      email,
      password
    };

    return fetch("https://balarathinam-foodapp-api.onrender.com/loginAuth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  onSubmit() {
    this.login(this.email, this.password).then((data) => {
      if (data) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('id', data.id);
        this.router.navigate(['home']);
      } else {
        alert('Invalid Data!');
      }
    }).catch(error => {
      console.error('Error:', error);
    });
  }

  

}
