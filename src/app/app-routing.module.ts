import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaComponent } from './administrador/componentes/plantilla/plantilla.component';
import { InicioSesionComponent } from './autenticacion/componentes/inicio-sesion/inicio-sesion.component';
import { ActualizarContrasenaComponent } from './autenticacion/componentes/actualizar-contrasena/actualizar-contrasena.component';
import { ReportesComponent } from './administrador/componentes/paginas/reportes/reportes.component';
import { ConfiguracionDeCuentaComponent } from './administrador/componentes/paginas/configuracion-de-cuenta/configuracion-de-cuenta.component';


const routes: Routes = [
  {
    path: 'administrar',
    component: PlantillaComponent,
    children: [
     {
      path: 'configurar',
      component: ConfiguracionDeCuentaComponent
     }
    ],
    //canActivate: [AutenticacionGuard, AutorizacionGuard]
  },
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'actualizar-contrasena',
    component: ActualizarContrasenaComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio-sesion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
