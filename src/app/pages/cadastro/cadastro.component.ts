import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioFormComponent } from '../../components/funcionario-form/funcionario-form.component';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FuncionarioFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
 btnAcao = "Cadastrar"
 btnTitulo= "Cadastrar Funcionario"
  constructor(private funcionarioService : FuncionarioService, private router: Router) {

  }
  
  createFuncionario(funcionario: Funcionario){
    this.funcionarioService.createFuncionario(funcionario).subscribe((data) => {
    })
  }

}
