import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  API_URI = "https://retoinnovati.herokuapp.com/";
  
  constructor(private http:HttpClient) { }

  //Envía texto al back la cual consume la API de Azure
  public start(dataForm: Object){
    return this.http.post(this.API_URI + "api/textToSpeech", dataForm);
  }

  //Descarga el archivo de audio desde el server
  public download(){
    return this.http.get(this.API_URI + "audio");
  }
}
