import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { PlantillaComponent } from './componentes/plantilla/plantilla.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PopupComponent } from '../alertas/componentes/popup/popup.component';
import { ReportesComponent } from './componentes/paginas/reportes/reportes.component';
import { AlertasModule } from '../alertas/alertas.module';
import { ConfiguracionDeCuentaComponent } from './componentes/paginas/configuracion-de-cuenta/configuracion-de-cuenta.component';



@NgModule({
  declarations: [
    PlantillaComponent,
    MenuLateralComponent,
    BarraNavegacionComponent,
    ReportesComponent,
    ConfiguracionDeCuentaComponent,
  ],
  imports: [
    CommonModule,
    AlertasModule,
    AdministradorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SweetAlert2Module.forRoot()
  ],
  exports:[]
})
export class AdministradorModule { }
