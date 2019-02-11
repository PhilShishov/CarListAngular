import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = CARS
  name: string;
  year: number;

  isEdit: boolean = false;
  editId: number;

  constructor() { }

  ngOnInit() {
  }
  addCar() {
    if (!this.name && !this.year) {
      alert("Fiеld is empty");
    }
    else {
      if (this.isEdit) {
        this.cars.map((val, index) => {
          if (val.id == this.editId) {
            val.name = this.name;
            val.year = this.year;
          }
        })
        this.isEdit = false;
        this.editId = null;
      }
      else {
        let newId = this.cars.length + 1;
        let obj = {
          id: newId,
          name: this.name,
          year: this.year
        }
        this.cars.push(obj);
      }
      this.name = '';
      this.year = null;
    }
  }
  deleteObj(car) {
    let filterCars = this.cars.filter((el) => { return el.id != car.id; });
    this.cars = filterCars;
  }
  editObj(car) {
    this.name = car.name;
    this.year = car.year;
    this.editId = car.id;
    this.isEdit = true;
  }
}

