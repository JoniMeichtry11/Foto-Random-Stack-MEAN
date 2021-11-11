import { Component, OnInit } from '@angular/core';
import { ImagesService } from "./services/images.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent implements OnInit{

  arrImagenes: any[] = [];

  numeroRandom: number;

  constructor(private imgService: ImagesService){
    this.numeroRandom = 0;
  }

  ngOnInit(): void{
    console.log("A TENER EN CUENTA!! : NO ESTÁ ADAPTADO PARA CELULAR. SOLO PARA PC.");
    this.imgService.getImagesAPI()
    .subscribe((data: any) => {
      console.log(data);
      this.arrImagenes = data;
      this.numeroRandom = Math.floor(Math.random() * (35 - 0)) + 0;
      console.log(this.arrImagenes.length);
    });
  }

  otraImagen(){
    this.numeroRandom = Math.floor(Math.random() * (35 - 0)) + 0;
    console.log(this.numeroRandom);
  }
}
