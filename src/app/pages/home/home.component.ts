import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

funcionarios: Funcionario[] = [];
funcionarioGeral: Funcionario[] = [];

constructor(private funcionarioService: FuncionarioService){

}

ngOnInit(): void {

  this.funcionarioService.GetFuncionarios().subscribe(data => {
    console.log(data)
  });
}

}
