import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from '../login/login.component';
import { SamlComponent } from '../saml/saml.component';
import { UnauthorizeComponent } from '../login/unauthorize/unauthorize.component';
import { PlatformComponent } from './platform.component';
import { HomeComponent } from '../modules/home/home.component';
import { UsersComponent } from '../modules/admin/users/users.component';
import { RolesComponent } from '../modules/admin/roles/roles.component';
import { CargosComponent } from '../modules/param/cargos/cargos.component';
import { GradosComponent } from '../modules/param/grados/grados.component';
import { ValoresFlexiblesComponent } from '../modules/param/valores-flexibles/valores-flexibles.component';
import { RequisitosComponent } from '../modules/param/requisitos/requisitos.component';
import { SiglasComponent } from '../modules/param/siglas/siglas.component';
import { RutaComponent } from '../modules/consultas/ruta/ruta.component';
import { EscalafonComponent } from '../modules/consultas/escalafon/escalafon.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'saml', component: SamlComponent },
  { path: '',   redirectTo: '/saml', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorizeComponent },
  { path: 'fac', component: PlatformComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'modulo/admin/usuarios', component: UsersComponent },
    { path: 'modulo/admin/roles', component: RolesComponent },
    { path: 'modulo/param/cargos', component: CargosComponent },
    { path: 'modulo/param/grados', component: GradosComponent },
    { path: 'modulo/param/valores-flexibles', component: ValoresFlexiblesComponent },
    { path: 'modulo/param/requisitos-ley', component: RequisitosComponent },
    { path: 'modulo/param/siglas', component: SiglasComponent },
    { path: 'modulo/consultas/ruta', component: RutaComponent },
    { path: 'modulo/consultas/escalafon', component: EscalafonComponent }
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
