import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Temas';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas(): Observable<Temas[]>{
    return this.http.get<Temas[]>("https://home-plus-teste.herokuapp.com/temas", this.token)
  }

  getByIdTema(id: number): Observable<Temas>{
    return this.http.get<Temas>(`https://home-plus-teste.herokuapp.com/temas/${id}`, this.token)
  }

  getByNomeTemas(nomeTema: string): Observable<Temas[]>{
    return this.http.get<Temas[]>(`https://home-plus-teste.herokuapp.com/temas/nomeTema/${nomeTema}`, this.token)
  }

  postTemas(temas: Temas): Observable<Temas>{
    return this.http.post<Temas>("https://home-plus-teste.herokuapp.com/temas", temas, this.token)
  }

  putTemas(temas: Temas): Observable<Temas> {
    return this.http.put<Temas>("https://home-plus-teste.herokuapp.com/temas", temas, this.token)
  }

  deleteTemas(id: number) {
    return this.http.delete(`https://home-plus-teste.herokuapp.com/temas/${id}`, this.token)
  }
}
