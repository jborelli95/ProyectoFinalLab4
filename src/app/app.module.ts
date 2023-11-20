import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomePageComponent } from './pages/navegacion/home-page/home-page.component';
import { LoginPageComponent } from './pages/users/login-page/login-page.component';
import { RegisterPageComponent } from './pages/users/register-page/register-page.component';
import { RegisterComponent } from './components/users/register/register.component';
import { InicioComponent } from './components/uefa/inicio/inicio.component';
import { LoginComponent } from './components/users/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { GruposComponent } from './components/uefa/grupos/grupos.component';
import { GruposPageComponent } from './pages/navegacion/grupos-page/grupos-page.component';
import { NoticiasComponent } from './components/uefa/noticias/noticias.component';
import { NoticiasPageComponent } from './pages/navegacion/noticias-page/noticias-page.component';
import { CalendarioComponent } from './components/uefa/calendario/calendario.component';
import { CalendarioPageComponent } from './pages/navegacion/calendario-page/calendario-page.component';
import { UserPageComponent } from './pages/users/user-page/user-page.component';
import { UserComponent } from './components/users/user/user.component';
import { EstadisticasPageComponent } from './pages/navegacion/estadisticas-page/estadisticas-page.component';
import { EstadisticasComponent } from './components/uefa/estadisticas/estadisticas.component';
import { ListadoPageComponent } from './pages/navegacion/listado-page/listado-page.component';
import { ListadoComponent } from './components/uefa/listado/listado.component';
import { ListadoPipe } from './pipes/listado.pipe';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserListPageComponent } from './pages/users/user-list-page/user-list-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterComponent,
    InicioComponent,
    LoginComponent,
    FooterComponent,
    NotFoundPageComponent,
    GruposComponent,
    GruposPageComponent,
    NoticiasComponent,
    NoticiasPageComponent,
    CalendarioComponent,
    CalendarioPageComponent,
    UserPageComponent,
    UserComponent,
    EstadisticasPageComponent,
    EstadisticasComponent,
    ListadoPageComponent,
    ListadoComponent,
    ListadoPipe,
    UserListComponent,
    UserListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
