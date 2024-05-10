import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,HttpClientModule],
  providers:[FoodService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData: any = {};
  constructor(private mailApi:FoodService){}
  submitForm(from:any) {
    this.mailApi.sendEmail(this.formData).subscribe(response => {
      console.log(response); // Handle success or error
     
    });
    alert('Response Sended')
    console.log(this.formData)
    from.resetForm();
  }
  }


