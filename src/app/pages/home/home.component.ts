import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../components/alert-component/alert-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AlertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  funcionario?: Funcionario;
  id!: number;
  tipo = 'success';
  titulo = 'Atenção!';
  mensagem = 'Usuario inativado com sucesso!';

  constructor(private funcionarioService: FuncionarioService) {}
  isLoading = true;
  funcionarioInativado = false;

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((data) => {
      const dados = data.dados;
      console.log()

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString(
          'pt-BR'
        );
        item.dataDeAlteracao = new Date(
          item.dataDeAlteracao!
        ).toLocaleDateString('pt-BR');
      });
      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;
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
  InativaFuncionario() {
    this.funcionarioService.InativaFuncionario(this.id).subscribe((data) => {});
    this.funcionarioInativado = true;
  }
}
