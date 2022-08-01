import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearExperienciaComponent } from './componentes/crear-experiencia/crear-experiencia.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CrearEducacionComponent } from './componentes/crear-educacion/crear-educacion.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'editar-experiencia', component:EditarExperienciaComponent},
  {path: 'crear-experiencia', component: CrearExperienciaComponent},
  {path: 'editar-educacion', component: EditarEducacionComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear-educacion', component: CrearEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
