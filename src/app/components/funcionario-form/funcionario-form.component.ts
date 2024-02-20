import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Funcionario } from '../../Models/Funcionarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.scss',
})
export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;

  funcionarioForm!: FormGroup;


  constructor(private router: Router) {}

  ngOnInit(): void {

    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      departamento: new FormControl('', [Validators.required]),
      turno: new FormControl('', [Validators.required]),
      ativo: new FormControl(true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date()),
    });
  }

  submit(){
    this.onSubmit.emit(this.funcionarioForm.value)
  }

}
