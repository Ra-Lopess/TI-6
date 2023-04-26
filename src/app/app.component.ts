import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dogs';

  showImageHappy: boolean;
  showImageSad: boolean;
  showImageAngry: boolean;
  showImageRelax: boolean;
  showImageX: boolean;
  isHappy: boolean;
  isSad: boolean;
  isAngry: boolean;
  isRelax: boolean;
  imgSelected: any;
  url: any;

  constructor(/*private Http: HttpClient*/) {
    this.showImageHappy = false;
    this.showImageSad = false;
    this.showImageAngry = false;
    this.showImageRelax = false;
    this.showImageX = false;
    this.isHappy = false;
    this.isSad = false;
    this.isAngry = false;
    this.isRelax = false;
    this.imgSelected = false;
  }
  
  uploadFile($event:any) {
    this.uploadDocument($event.target.files[0]);
  }

  uploadDocument(file:any) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.url = fileReader.result; 
    }
    this.imgSelected = true;
    return fileReader.readAsDataURL(file);
  }

  destroyImg() {
    this.url = null;
    this.imgSelected = false;
  }

  postImg() {
    // this.Http.post("CAMINHO API", {img:this.url}); // Mudar CAMINHO API!!!!!!!!!!!!!!!!!!!!!
  }
}
