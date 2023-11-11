import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ServAuthService } from '../servicio/serv-auth.service'

@Component({
  selector: 'app-fm-login',
  templateUrl: './fm-login.page.html',
  styleUrls: ['./fm-login.page.scss'],
})
export class FmLoginPage implements OnInit {
  public formularioLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public auth: ServAuthService
  ) { 
    this.formularioLogin = formBuilder.group({
      usuario: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      password: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    })
  }
  public intentarLogear(){
    console.log('hola')
    if(!this.formularioLogin.valid){
        alert("form incorrecto");
        this.formularioLogin.controls['nombre'].setValue('');
        this.formularioLogin.controls['password'].setValue('');
        this.formularioLogin.clearValidators();
      return
    }
    this.auth.intentarLogear(
      this.formularioLogin.controls["nombre"].value,
      this.formularioLogin.controls["password"].value
    )
  }
  ngOnInit() {
  }

}
