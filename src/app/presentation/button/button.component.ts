import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'] // Corrección aquí
})
export class ButtonComponent {
  @Input() label: string = 'Open Form';
  @Input() buttonClass: string = 'primary';
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}


