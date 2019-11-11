import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films=[{titre:"Anges & Démons",affiche:"../assets/ange.jpg",duree:120},
    {titre:"Coco",affiche:"../assets/coco.jpg",duree:88},
    {titre:"Coeur Nomade",affiche:"../assets/nomade.bmp",duree:97},]
    date= new Date();
  constructor() { }

  ngOnInit() {
  }

}
