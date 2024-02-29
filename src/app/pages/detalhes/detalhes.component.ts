import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule, CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatTableModule, MatInputModule, MatSelectModule, MatDialogModule, MatSelectModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss'
})
export class DetalhesComponent {
  funcionario?: Funcionario;
  id!:number;


  constructor(private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router){}
  isLoading = true;

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  
  this.funcionarioService.GetFuncionario(id).subscribe((data) =>{
    const dados = data.dados;
    dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString("pt-BR");
    dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString("pt-BR");

    this.funcionario = dados;
    this.isLoading = false;
  } )
  
  
  }
}
