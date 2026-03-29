import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  filtroActivo = 'todos';
  filtros = ['todos', 'academy', 'makeup', 'permanent'];

  trabajos = [
    { cat: 'permanent', titulo: 'Cejas Pelo a Pelo', subtitulo: 'Micropigmentación', color: 'azul' },
    { cat: 'makeup', titulo: 'Maquillaje Social', subtitulo: 'Evento especial', color: 'salmon' },
    { cat: 'permanent', titulo: 'Ombre Brows', subtitulo: 'Degradado natural', color: 'azul' },
    { cat: 'academy', titulo: 'Masterclass 2024', subtitulo: 'Asunción', color: 'marron' },
    { cat: 'makeup', titulo: 'Maquillaje de Novia', subtitulo: 'Sesión fotográfica', color: 'salmon' },
    { cat: 'permanent', titulo: 'Labios Acuarelados', subtitulo: 'Micropigmentación', color: 'azul' },
    { cat: 'academy', titulo: 'Certificación', subtitulo: 'Coronel Oviedo', color: 'marron' },
    { cat: 'makeup', titulo: 'Editorial', subtitulo: 'Producción artística', color: 'salmon' },
    { cat: 'permanent', titulo: 'Delineado Superior', subtitulo: 'Trazo fino', color: 'azul' },
  ];

  get trabajosFiltrados() {
    return this.filtroActivo === 'todos'
      ? this.trabajos
      : this.trabajos.filter(t => t.cat === this.filtroActivo);
  }
}
