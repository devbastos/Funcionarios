import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuncionarioFormComponent } from '../../components/funcionario-form/funcionario-form.component';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FuncionarioFormComponent, CommonModule, RouterModule,],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent implements OnInit{
btnAcao: string ='Voltar'
btnTitulo: string='Editar Funcionário'
funcionario!: Funcionario;

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
editFuncionario(funcionario: Funcionario) {
  this.funcionarioService.EditarFuncinario(funcionario).subscribe((data) =>{
    this.router.navigate(['/']);
  } )
}

}
