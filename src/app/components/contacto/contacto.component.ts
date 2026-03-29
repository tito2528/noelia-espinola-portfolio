import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  form = { nombre: '', email: '', servicio: '', mensaje: '' };
  enviado = false;

  enviar() {
    if (this.form.nombre && this.form.email && this.form.mensaje) {
      this.enviado = true;
      setTimeout(() => { this.enviado = false; this.form = { nombre: '', email: '', servicio: '', mensaje: '' }; }, 4000);
    }
  }
}
