import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/users/login-page/login-page.component';
import { RegisterPageComponent } from './pages/users/register-page/register-page.component';
import { RegisterComponent } from './components/users/register/register.component';
import { InicioComponent } from './components/uefa/inicio/inicio.component';
import { LoginComponent } from './components/users/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './components/users/edit/edit.component';
import { EditPageComponent } from './pages/users/edit-page/edit-page.component';
import { TestComponent } from './components/tests/test/test.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


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
    EditComponent,
    EditPageComponent,
    TestComponent,
    NotFoundPageComponent
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
