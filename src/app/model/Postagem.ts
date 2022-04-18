import { Comentario } from "./Comentario"
import { Temas } from "./Temas"
import { Usuario } from "./Usuario"

export class Postagem {
    
    public idPostagem: number
    public titulo: string
    public textoPost: string
    public sensivel: boolean
    public data: Date
    public usuario: Usuario
    public comentarios: Comentario[]
    public temas: Temas
}