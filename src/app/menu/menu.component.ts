import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Comentario } from '../model/Comentario';
import { Postagem } from '../model/Postagem';
import { ComentarioService } from '../service/comentario.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  listaPostagem: Postagem[]
  listaComentario: Comentario[]

  constructor(private router: Router,
    private postagemService: PostagemService,
    private comentarioService: ComentarioService) { }

  ngOnInit(){
  }

  sair() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
      
      // this.temasUnicos = [...new Set(this.listaPostagem)]
      // console.log(this.temasUnicos)
    })
  }

  findAllComentarios() {
    this.comentarioService.getAllComentarios().subscribe((resp: Comentario[]) => {
      this.listaComentario = resp
    })
  }

  findPostsAndComentarios(){
    this.findAllPostagens
    this.findAllComentarios
  }

}
