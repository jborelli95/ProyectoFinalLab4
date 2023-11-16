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
import { TestComponent } from './components/tests/test/test.component';
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
    TestComponent,
    NotFoundPageComponent,
    GruposComponent,
    GruposPageComponent,
    NoticiasComponent,
    NoticiasPageComponent,
    CalendarioComponent,
    CalendarioPageComponent,
    UserPageComponent,
    UserComponent,
    EstadisticasPageComponent
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
