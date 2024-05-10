import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sigin',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {

 
 
  email: string = '';
  password: string = '';
 
  constructor(private router: Router) {}
  login(email: string, password: string): Promise<any> {
    const data = {
      email,
      password
    };

    return fetch("https://balarathinam-foodapp-api.onrender.com/createUser", {
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
        alert('logined successfully')
        this.router.navigate(['login']);
      } else {
        alert('Invalid Data!');
      }
    }).catch(error => {
      console.error('Error:', error);
    });
  }
}
