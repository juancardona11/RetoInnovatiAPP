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
    public service: TtsService) 
    {
      this.myForm = this.createMyForm();     
    }
    saveData(){
      console.log(this.myForm.value);
    }
    private createMyForm(){
      return this.formBuilder.group({
        text: ['Hola. Mi nombre es Andrea, es un placer conocerte. Vivo en la ciudad de medellin. Me gusta hacer deporte y los tacos.', Validators.required]
        
      });
    }
    download(){
      var audio = new Audio("https://retoinnovati.herokuapp.com/audio"); 
      audio.play();
      }
    start(){
      console.log(this.myForm.value);
      this.service.start(this.myForm.value)
           .subscribe();         
    }

}
