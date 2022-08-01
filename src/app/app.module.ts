import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HeroImageComponent } from './componentes/hero-image/hero-image.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { CrearExperienciaComponent } from './componentes/crear-experiencia/crear-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CrearEducacionComponent } from './componentes/crear-educacion/crear-educacion.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    MenuComponent,
    HeroImageComponent,
    ExperienciaComponent,
    EditarExperienciaComponent,
    CrearExperienciaComponent,
    EducacionComponent,
    CrearEducacionComponent,
    EditarEducacionComponent,
    HabilidadesComponent,
    PieComponent,
    ContactoComponent,
    ProyectosComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
