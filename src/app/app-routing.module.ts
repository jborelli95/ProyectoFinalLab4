import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/navegacion/home-page/home-page.component';
import { RegisterPageComponent } from './pages/users/register-page/register-page.component';
import { LoginPageComponent } from './pages/users/login-page/login-page.component';
import { EditPageComponent } from './pages/users/edit-page/edit-page.component';
import { TestComponent } from './components/tests/test/test.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { GruposPageComponent } from './pages/navegacion/grupos-page/grupos-page.component';
import { NoticiasPageComponent } from './pages/navegacion/noticias-page/noticias-page.component';
import { CalendarioPageComponent } from './pages/navegacion/calendario-page/calendario-page.component';

const routes: Routes = [
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"grupos",
    component:GruposPageComponent
  },
  {
    path:"noticias",
    component:NoticiasPageComponent
  },
  {
    path:"calendario",
    component:CalendarioPageComponent
  },
  {
    path:"login",
    component:LoginPageComponent
  },
  {
    path:"register",
    component:RegisterPageComponent
  },
  {
    path:"editar/:id",
    component:EditPageComponent
  },
  {
    path:"test",
    component:TestComponent
  },
  {
      path:"not-found",
      component:NotFoundPageComponent
  },
  {
    path:"**",
    redirectTo:"not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
