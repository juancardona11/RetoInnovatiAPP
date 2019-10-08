import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { TtsService } from '../tts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myForm: FormGroup;
 

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public service: TtsService) {
      this.myForm = this.createMyForm();     
    }

    //Crea el texto para ser enviado.
    private createMyForm(){
      return this.formBuilder.group({
        text: ['Hola. Mi nombre es Andrea, es un placer conocerte. Vivo en la ciudad de medellin. Me gusta hacer deporte y los tacos.', Validators.required]
        
      });
    }

    //Descarga el audio desde el servidor por medio de la API.
    download(){
      var audio = new Audio("https://retoinnovati.herokuapp.com/audio"); 
      audio.play();
      }

    //Envía el texto al servidor.
    start(){
      console.log(this.myForm.value);
      this.service.start(this.myForm.value)
           .subscribe(err => console.log(err));         
    }

}
