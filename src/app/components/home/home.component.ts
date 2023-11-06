import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  models:string[]=[
    'Yamaha R15 Black',
    'Yamaha Jupiter',
    'Yamaha Fz Light Blue'
  ];

  bikeform: FormGroup;
  validMessage:string="";
  ngOnInit() {
    this.bikeform =new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      purchaseRate:new FormControl('',Validators.required),
      purchaseDate:new FormControl('',Validators.required)
    });
  }

  submitRegistration(){
    if(this.bikeform.valid){
      this.validMessage="Your bike registration has been succesfull ";
      this.bikeService.addNewBike(this.bikeform.value).subscribe(
        data =>{
          this.bikeform.reset();
          return true;
        }
        )
    } else {
      this.validMessage ="Please fill out the form before submitting"
    }
  }
  constructor(private bikeService:BikeService){}
}
