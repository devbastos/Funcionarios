import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Funcionario } from '../Models/Funcionarios';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiUrl = `${environment.ApiUrl}/Funcionario`;

  constructor(private http: HttpClient) {}

  GetFuncionarios(): Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  GetFuncionario(id: number): Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }


  CreateFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  EditarFuncinario(
    funcionario: Funcionario
  ): Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(
      `${this.apiUrl}`,
      funcionario
    );
  }

  InativaFuncionario(id: number): Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(
      `${this.apiUrl}/InativaFuncionario?id=${id}`,
      null
    );
  }
}
