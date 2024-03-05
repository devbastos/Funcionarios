import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule, AlertComponent, FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatTableModule,
    MatInputModule, MatSelectModule, MatDialogModule, MatSelectModule, ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss',
})
export class DetalhesComponent implements OnInit {
  funcionario?: Funcionario;
  id!: number;


  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  isLoading = true;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(this.id).subscribe((data) => {
      const dados = data.dados;
      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString(
        'pt-BR'
      );
      dados.dataDeAlteracao = new Date(
        dados.dataDeAlteracao!
      ).toLocaleDateString('pt-BR');

      this.funcionario = dados;
      this.isLoading = false;
    });
  }
}
