import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IniciarSesionRespuesta } from '../../modelos/IniciarSesionRespuesta';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { ModalRecuperacionContrasenaComponent } from '../modal-recuperacion-contrasena/modal-recuperacion-contrasena.component';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  @ViewChild('modalRecuperacion') modalRecuperacion!: ModalRecuperacionContrasenaComponent
  public llaveCaptcha = '6LemnwgjAAAAAD4NV9ROf1inZOsO5tmM71nNfaQn'
  public formulario: FormGroup


  constructor(private servicioAutenticacion: AutenticacionService, private enrutador: Router) {
    this.formulario = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required]),
      captcha: new FormControl(null, Validators.required)
    })
    }

  ngOnInit(): void {
  }

  public iniciarSesion(): void{
    if (this.formulario.invalid) {
      this.marcarFormularioComoSucio()
    }
    if (this.formulario.valid) {
      this.servicioAutenticacion.iniciarSesion( this.formulario.controls['usuario'].value.toString(), this.formulario.controls['clave'].value,).subscribe((respuesta: IniciarSesionRespuesta)=>{
        this.servicioAutenticacion.guardarInformacionInicioSesion(
          respuesta.token,
          respuesta.rol,
          respuesta.usuario
        )

        if (respuesta.claveTemporal === true) {
          this.enrutador.navigateByUrl('/actualizar-contrasena')
        } else {
          console.log('navegando a ', `/administrar${respuesta.rol._modulos[0]._ruta}`)
          this.enrutador.navigateByUrl(`/administrar${respuesta.rol._modulos[0]._ruta}`)
        }
      }, (error: HttpErrorResponse) => {
        if (error.status == 423) {
          this.abrirModalRecuperacion()
        }
        if (error.status == 400) {
          Swal.fire('credenciales incorrectas')
        }
      })
    }
  }

  public abrirModalRecuperacion():void{
    this.modalRecuperacion.abrir()
  }

  public marcarFormularioComoSucio():void{
    (<any>Object).values(this.formulario.controls).forEach((control:FormControl) => {
      control.markAsDirty();
      if (control) {
        control.markAsDirty()
      }
    });
  }
}
