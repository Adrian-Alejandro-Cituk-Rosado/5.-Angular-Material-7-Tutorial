import { Component, OnInit } from '@angular/core';
import { PhotosService } from './services/photos.service';
import { Photo } from './models/Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  photos: Photo[]=[];
  albumId=[1,2,3];

  constructor(public photosService: PhotosService) { }


}
