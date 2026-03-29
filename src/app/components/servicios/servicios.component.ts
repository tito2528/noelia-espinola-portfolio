import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    {
      categoria: 'Academy',
      color: 'marron',
      icono: '◈',
      titulo: 'Masterclass de Micropigmentación',
      descripcion: 'Formación avanzada en técnicas de cejas, labios y delineado permanente. Certificación internacional incluida.',
      items: ['Micropigmentación de Cejas', 'Diseño de Labios', 'Delineado Permanente']
    },
    {
      categoria: 'Makeup',
      color: 'salmon',
      icono: '◇',
      titulo: 'Maquillaje Profesional',
      descripcion: 'Desde looks cotidianos hasta producciones para eventos especiales, bodas y sesiones fotográficas.',
      items: ['Maquillaje Social', 'Maquillaje de Novia', 'Sesiones Fotográficas']
    },
    {
      categoria: 'Permanent Makeup',
      color: 'azul',
      icono: '◉',
      titulo: 'Micropigmentación Avanzada',
      descripcion: 'Técnicas de vanguardia para realzar tu belleza natural con resultados duraderos y naturales.',
      items: ['Cejas Pelo a Pelo', 'Ombre Brows', 'Labios Acuarelados']
    }
  ];
}