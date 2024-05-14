import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {

  shows:any=[
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "type": "Movie",
      "imageUrl": "https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 2,
      "title": "Game of Thrones",
      "description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      "type": "TV Series",
      "imageUrl": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"

    },
    {
      "id": 3,
      "title": "Inception",
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      "type": "Movie",
      "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    }
  ]
}
