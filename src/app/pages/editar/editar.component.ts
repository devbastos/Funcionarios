import { Component } from '@angular/core';
import { FuncionarioFormComponent } from '../../components/funcionario-form/funcionario-form.component';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FuncionarioFormComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent {

}
