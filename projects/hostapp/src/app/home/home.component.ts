import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products:any=[
    {
      "id": 1,
      "name": "Product 1",
      "description": "This is the description for Product 1.",
      "price": 19.99,
      "imageUrl": "./../../assets/p1.jpg"
    },
    {
      "id": 2,
      "name": "Product 2",
      "description": "This is the description for Product 2.",
      "price": 24.99,
      "imageUrl": "./../../assets/p2.jpg"
    },
    {
      "id": 3,
      "name": "Product 3",
      "description": "This is the description for Product 3.",
      "price": 29.99,
      "imageUrl": "./../../assets/p3.jpg"
    }
  ]
}
