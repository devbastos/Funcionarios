import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-alert-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.scss'
})

export class AlertComponent {
  @Input() tipo!: string;
  @Input() titulo!: string;
  @Input() mensagem!: string;

  visible = true;

  ngOnInit(): void {
    timer(5000).subscribe(() => {
      this.visible = false;
    });
  }
}

