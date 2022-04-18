import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { TemasComponent } from './temas/temas.component';

const routes: Routes = [
  {path: "", redirectTo: "about", pathMatch: "full"},
  {path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "cadastrar", component: CadastroComponent},
  {path: "inicio", component: InicioComponent},
  {path: "meu-perfil", component: MeuPerfilComponent},
  {path: "pesquisar-postagens", component: PesquisaComponent},
  {path: "temas", component: TemasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
