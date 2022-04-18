import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Temas';
import { AuthService } from '../service/auth.service';
import { TemasService } from '../service/temas.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  tema: Temas = new Temas()
  listaTemas: Temas[]

  constructor( private router: Router,
    private temaService: TemasService,
    public auth: AuthService) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(["/login"])
    }
    

    this.buscarTemas()
  }

  buscarTemas(){
    this.temaService.getAllTemas().subscribe((resp: Temas[]) =>{
      this.listaTemas = resp
    })
  }

  cadastrarTema(){
    this.temaService.postTemas(this.tema).subscribe({
      next: (resp: Temas)=>{
      this.tema = resp
      alert("tema cadastrado")
      this.tema = new Temas()
      this.buscarTemas()
    },
    error: erro =>{
      if(erro.status == 400){
        
        alert("favor preencha os campos")
      }
    },
  });
  }


}