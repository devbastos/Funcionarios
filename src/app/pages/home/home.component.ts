import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from '../../components/alert-component/alert-component.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AlertComponent,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  columnsToDisplay = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações'];
  id!: number;
  tipo = 'success';
  titulo = 'Atenção!';
  mensagem = 'Usuario inativado com sucesso!';

  constructor(
    private funcionarioService: FuncionarioService,
    public matDialog: MatDialog
  ) {}
  isLoading = true;
  funcionarioInativado = false;

  ngOnInit(): void {
    this.carregaTabela()
  }

  carregaTabela() {
    this.funcionarioService.GetFuncionarios().subscribe((data) => {
      const dados = data.dados;
      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.funcionariosGeral = dados;
      this.funcionarios = dados;
      this.isLoading = false;
    });
  }
  // filtro
  nome(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter((funcionario) => {
      return funcionario.nome.toLowerCase().includes(value);
    });
  }
  // filtro
  sobrenome(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter((funcionario) => {
      return funcionario.sobrenome.toLowerCase().includes(value);
    });
  }
  // filtro
  departamento(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter((funcionario) => {
      return funcionario.departamento.toLowerCase().includes(value);
    });
  }

  //Inativa Funcionario
  InativaFuncionario(id: number) {
    this.funcionarioService.InativaFuncionario(id).subscribe((data) => {
      this.funcionarioInativado = true;
      this.carregaTabela()
    });
  }
}
