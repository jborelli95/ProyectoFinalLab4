import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/navegacion/home-page/home-page.component';
import { RegisterPageComponent } from './pages/users/register-page/register-page.component';
import { LoginPageComponent } from './pages/users/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { GruposPageComponent } from './pages/navegacion/grupos-page/grupos-page.component';
import { NoticiasPageComponent } from './pages/navegacion/noticias-page/noticias-page.component';
import { CalendarioPageComponent } from './pages/navegacion/calendario-page/calendario-page.component';
import { userAuthGuard } from './guards/user-auth.guard';
import { loginGuard } from './guards/login.guard';
import { homeGuard } from './guards/home.guard';
import { UserPageComponent } from './pages/users/user-page/user-page.component';
import { EstadisticasPageComponent } from './pages/navegacion/estadisticas-page/estadisticas-page.component';
import { ListadoPageComponent } from './pages/navegacion/listado-page/listado-page.component';
import { registerGuard } from './guards/register.guard';
import { UserListPageComponent } from './pages/users/user-list-page/user-list-page.component';
import { adminGuardGuard } from './guards/admin.guard.guard';

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [homeGuard]
  },
  {
    path: "grupos",
    component: GruposPageComponent,
    canActivate: [userAuthGuard]
  },
  {
    path: "user",
    component: UserPageComponent,
    canActivate: [userAuthGuard]
  },
  {
    path: "noticias",
    component: NoticiasPageComponent,
    canActivate: [userAuthGuard]
  },
  {
    path: "calendario",
    component: CalendarioPageComponent,
    canActivate: [userAuthGuard]
  },
  {
    path: "login",
    component: LoginPageComponent,
    canActivate: [loginGuard]
  },
  {
    path: "register",
    component: RegisterPageComponent,
    canActivate: [registerGuard]
  },
  {
    path: "estadisticas",
    component: ListadoPageComponent,
    canActivate: [userAuthGuard]
  },
  {
    path: "estadisticas/:id",
    component: EstadisticasPageComponent,
    canActivate: [userAuthGuard]
  },
  {
    path: "not-found",
    component: NotFoundPageComponent
  },
  {
    path: "admin",
    component: UserListPageComponent,
    canActivate: [adminGuardGuard]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
